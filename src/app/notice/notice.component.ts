import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INoticeConfig } from '../service/data.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  allNoticeDatas: INoticeConfig[] = []
  formValue!: FormGroup
  AddData=false
  EditData=false

  constructor(private noticeservice: DataService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getNoticeData();
    this.formValue = this.formbuilder.group(
      {
        noticeTitle: new FormControl(''),
        noticeData: new FormControl(''),
        noticeName: new FormControl(''), 
        createdAt: new FormControl(''),
        updatedAt: new FormControl(''),
        innerNoticeData: this.formbuilder.array([
          this.formbuilder.group(
            {
              img: new FormControl(''),
              noticeInfoText: new FormControl('')
            }
          )
        ]),
        dashboardInfo: this.formbuilder.array([
          this.formbuilder.group({
            displayName: new FormControl('')
          })
        ])
      },

    )
  }

  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddData = true
      this.EditData = false
    }
    if(item == 'edit'){
      this.AddData = false
      this.EditData = true
    }
  }

  getNoticeData() {
    this.noticeservice.getNoticeData().subscribe((datas) => {
      this.allNoticeDatas = datas;
      console.log(datas)
    })
  }

  editNoticeData(item: any) {
    console.log(item, "edit click items")
    delete item.createdAt;
    delete item.updatedAt;
    delete item.__v;
    this.formValue.addControl("_id", new FormControl(''))
    this.formValue.setValue(item)
  }

  update() {
    const id = this.formValue.value._id;
    this.noticeservice.updateNoticeData(id, this.formValue.value).subscribe((data:any)=>{
      this.allNoticeDatas = data
      alert("Data updated")
      console.log(data, "Updated data")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getNoticeData()
  }
  
  postNoticeData() {
    this.allNoticeDatas = this.formValue.value;
    this.noticeservice.postNoticeData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getNoticeData()
      })
  }

  /* deleteNoticeData(item: any) { 
    console.log(item._id, "delete ka id")
    this.noticeservice.deleteNoticeData(item._id).subscribe(data=>{
      alert("Data Deleted");
      this.getNoticeData()
    })
  } */

  deleteNoticeData(item: any) {
    const datadelete = this.allNoticeDatas.length;
    if(datadelete === 1){
      alert("You Can't delete this data atleast 1 data should be present")
    }
    else{
      console.log( this.allNoticeDatas)
    this.noticeservice.deleteBanData(item._id).subscribe(() => {
      alert("Data Deleted")
      this.getNoticeData();
      
    })
    }
  }

}
