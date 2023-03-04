import { Component, OnInit } from '@angular/core';
import { Iregistration } from 'src/app/service/data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  allRegisterData: Iregistration[] = []
  // dar: any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
   this.getRegister();

  }
  getRegister() {
    this.data.getRegister().subscribe(res => {
      this.allRegisterData = res;
      // const data = res;
      console.log(this.allRegisterData)
    })
  }

  deleteClass(_id:string){
  this.data.deleteRegisterData(_id).subscribe((res)=>{
    console.log(res,'delete')
    this.getRegister();
  })
  }
  

}


