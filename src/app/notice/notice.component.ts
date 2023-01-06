import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INoticeConfig } from '../service/data.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  formValue!: FormGroup

  allNoticeData: INoticeConfig[] = []
  constructor(private notice: DataService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getNoticeData();
    this.formValue = this.formbuilder.group(
      {
        noticeInfo:this.formbuilder.array([
          this.formbuilder.group({
            NameToDisplay: new FormControl(''),
            noticeData: new FormControl(''),
            noticeLink: new FormControl(''),
          })
        ]), 
        modalData: this.formbuilder.array([
          this.formbuilder.group({
            noticename: new FormControl(''),
            title: new FormControl(''),
            name: new FormControl(''),
            description: new FormControl(''), 
            createdAt: new FormControl(''), 
            updatedAt: new FormControl('')
          })
        ])
      }, 
      
    )
  }

  getNoticeData() {
    this.notice.getNoticeData().subscribe((datas) => {
      this.allNoticeData = datas;
    })
  }

  postNoticeData() {
    this.allNoticeData = this.formValue.value;
    this.notice.postNoticeData(this.formValue.value)
    .subscribe((res)=>{
      alert("Data Added")

    })
  }

  editNoticeData(item: any) {

  }

  update(){

  }

  deleteBanData(item:any){}

}
