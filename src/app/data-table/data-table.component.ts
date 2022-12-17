import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupName, FormArray } from '@angular/forms';
import { IBannerCarosuelComponent } from '../service/data.interface';
import { DataService } from '../service/data.service';
interface Product {
  name: string;
  id: any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  allBanData!: IBannerCarosuelComponent;
  allBanDatas: IBannerCarosuelComponent[] = []

  formValue!: FormGroup

  constructor(private data: DataService, private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.getBanData();
    this.formValue = this.formbuilder.group(
      {
      innerData: this.formbuilder.array([
        this.formbuilder.group(
          {
            header: new FormControl(''),
            text: new FormControl(''),
            buttonText: new FormControl(''),
          }
        )
      ]),
      background: this.formbuilder.array([
        this.formbuilder.group({
          url: new FormControl(''),
        alt: new FormControl('')
        })
      ]),
      image: this.formbuilder.array([
        this.formbuilder.group(
          {
            url: new FormControl(''),
            alt: new FormControl('')
          }
        )
      ]),
      carouselDetails: this.formbuilder.array([
        this.formbuilder.group(
          {
            name: new FormControl(''),
            createdBy: new FormControl(''),
            modifiedBy: new FormControl(''),
            description: new FormControl('')
          }
        )
      ]),
      routeLink: new FormControl(''),
    })
  }

  editBanData(item: any) {
   console.log(item)
   delete item.createdAt;
   delete item.updatedAt;
   delete item.__v;
   this.formValue.addControl("_id",new FormControl(''))
   this.formValue.setValue(item)

  }
  getBanData() {
    this.data.getBanData().subscribe((datas) => {
      this.allBanDatas = datas;
      console.log(datas)
    })
  }

  update(data: any) {
    console.log(data + "update")
  }
  postBanData() {
    this.allBanDatas = this.formValue.value;
    console.log(this.allBanDatas)
    this.data.postBanData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        alert("Data Added")
        this.getBanData()
        let ref = document.getElementById('cancel')
        ref?.click();
      })
  }

  deleteBanData(item: any) {
    console.log("ID" ,item)
    this.data.deleteBanData(item._id).subscribe(res => {
      alert("Data Deleted")
      this.getBanData();
    })
  }

}



