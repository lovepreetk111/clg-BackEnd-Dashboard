import { HttpClient } from '@angular/common/http';
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
  AddCarousel=false
  EditCarousel=false
  formValue: any = FormGroup
  selectedFile: any;
  SERVER_URL = "http://localhost:3000/bannerData/upload";
  constructor(private data: DataService, private formbuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getBanData();
    this.formValue = this.formbuilder.group( //object
      {
       
        profile: [''],

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
  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddCarousel = true
      this.EditCarousel = false
    }
    if(item == 'edit'){
      this.AddCarousel = false
      this.EditCarousel = true
    }
  }
  getBanData() {
    this.data.getBanData().subscribe((datas: IBannerCarosuelComponent[]) => {
      this.allBanDatas = datas;
      console.log(datas)
    })
  }

  editBanData(item: any) {
    console.log(item)
    delete item.createdAt;
    delete item.updatedAt;
    delete item.__v;
    this.formValue.addControl("_id", new FormControl(''))
    this.formValue.setValue(item)
  }

  update() {
    const id = this.formValue.value._id
    console.log(id, "id")
    this.data.updateBanData(id, this.formValue.value).subscribe((result: any) => {
      this.allBanDatas = result
      console.log(result, "result")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getBanData()
  }

   postBanData() {
    this.uploadImg();
    this.allBanDatas = this.formValue.value;
    console.log(this.allBanDatas)
  }

 deleteBanData(item: any) {
    const datadelete = this.allBanDatas.length;
    if(datadelete === 1){
      alert("You Can't delete this data atleast 1 data should be present")
    }
    else{
      console.log( this.allBanData)
    this.data.deleteBanData(item._id).subscribe(() => {
      alert("Data Deleted")
      this.getBanData();
      
    })
    }
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formValue.get('profile').setValue(file);
    }
    console.log(event.target.file);
  }


 

  uploadImg() {
    const formData = new FormData();
   formData.append('file', this.formValue.get('profile').value);
   
   this.http.post<any>(this.SERVER_URL, formData).subscribe(
     (res) => {
       const carouselData2 = this.formValue.value;
       carouselData2['image'][0]["url"]=res.filePath;
       console.log(this.formValue.get(['image', 0, "url"]))
       this.data.postBanData(carouselData2)
       .subscribe((res: any) => {
         console.log(res)
         alert("Data Added")
         let ref = document.getElementById('cancel')
         ref?.click();
         this.getBanData()

       })
     },
     (err) => console.log(err)
   );
}

}



