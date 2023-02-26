import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IPlacementComponent } from 'src/app/service/data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {
  allPlacementData!: IPlacementComponent;
  allPlacementDatas: IPlacementComponent[] = []
  AddPlacement=false
  EditPlacement=false
  formValue!: FormGroup

  constructor(private data: DataService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPlacementData();
    this.formValue = this.formbuilder.group( //object
      {
        innerData: this.formbuilder.array([
          this.formbuilder.group(
            {
              post: new FormControl(''),
              facultyName: new FormControl(''),
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

  getPlacementData() {
    this.data.getPlacementData().subscribe((datas) => {
      this.allPlacementDatas = datas;
      console.log(datas)
    })
  }

  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddPlacement = true
      this.EditPlacement = false
    }
    if(item == 'edit'){
      this.AddPlacement = false
      this.EditPlacement = true
    }
  }

  editPlacementData(item: any) {
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
    this.data.updatePlacementData(id, this.formValue.value).subscribe((result: any) => {
      this.allPlacementDatas = result
      console.log(result, "result")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getPlacementData()
  }

  postPlacementData() {
    this.allPlacementDatas = this.formValue.value;
    console.log(this.allPlacementDatas)
    this.data.postPlacementData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getPlacementData()
      })
  }

  deletePlacementData(item: any) {
    const datadelete = this.allPlacementDatas.length;
    if(datadelete === 1){
      alert("You Can't delete this data atleast 1 data should be present")
    }
    else{
      console.log( this.allPlacementData)
    this.data.deletePlacementData(item._id).subscribe(() => {
      alert("Data Deleted")
      this.getPlacementData();
      
    })
    }
  }

}
