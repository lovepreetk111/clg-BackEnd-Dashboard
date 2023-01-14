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

  getNoticeData() {
    this.noticeservice.getNoticeData().subscribe((datas) => {
      this.allNoticeDatas = datas;
      console.log(datas)
    })
  }

  postNoticeData() {
    this.allNoticeDatas = this.formValue.value;
    this.noticeservice.postNoticeData(this.formValue.value)
      .subscribe((res) => {
        alert("Data Added")

      })
  }

  editNoticeData(item: any) {

  }

  update() {

  }

  deleteBanData(item: any) { }

}
