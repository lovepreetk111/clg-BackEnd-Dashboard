import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IResearchComponent } from 'src/app/service/data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  allResearchData!: IResearchComponent;
  allResearchDatas: IResearchComponent[] = []
  AddResearch=false
  EditResearch=false
  formValue!: FormGroup
  constructor(private data: DataService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getResearchData();
    this.formValue = this.formbuilder.group( //object
      {
        innerData: this.formbuilder.array([
          this.formbuilder.group(
            {
              text: new FormControl(''),
              buttoninfo: new FormControl(''),
            }
          )
        ]),
        background: this.formbuilder.array([
          this.formbuilder.group({
            url: new FormControl(''),
            alt: new FormControl('')
          })
        ]),
        infoResearch: this.formbuilder.array([
          this.formbuilder.group(
            {
              name: new FormControl(''),
              createdBy: new FormControl(''),
              modifiedBy: new FormControl('')
            }
          )
        ]),
        imageAlt: new FormControl(''),
      })
  }

  getResearchData() {
    this.data.getResearchData().subscribe((datas) => {
      this.allResearchDatas = datas;
      console.log(datas)
    })
  }

  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddResearch = true
      this.EditResearch = false
    }
    if(item == 'edit'){
      this.AddResearch = false
      this.EditResearch = true
    }
  }

  editResearchData(item: any) {
    console.log(item, "edit click items")
    delete item.createdAt;
    delete item.updatedAt;
    delete item.__v;
    this.formValue.addControl("_id", new FormControl(''))
    this.formValue.setValue(item)
  }

  update() {
    const id = this.formValue.value._id
    console.log(id, "id")
    this.data.updateResearchData(id, this.formValue.value).subscribe((result: any) => {
      this.allResearchDatas = result
      console.log(result, "result")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getResearchData()
  }

  postResearchData() {
    this.allResearchDatas = this.formValue.value;
    console.log(this.allResearchDatas)
    this.data.postResearchData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getResearchData()
        // this.AddCarousel = false
      })
  }

  deleteResearchData(item: any) {
    const datadelete = this.allResearchDatas.length;
    if(datadelete === 1){
      alert("You Can't delete this data atleast 1 data should be present")
    }
    else{
      console.log( this.allResearchData)
    this.data.deleteresearchData(item._id).subscribe(() => {
      alert("Data Deleted")
      this.getResearchData();
      
    })
    }
  }

}
