import { Component, OnInit } from '@angular/core';
import { Iregistration } from 'src/app/service/data.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  allRegister:Iregistration[] = []
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  getregister() {
    this.data.getregister().subscribe((datas) => {
      this.allRegister = datas;
      console.log(this.allRegister)
    })
    console.log(this.allRegister)
  }

  deleteClass(){

  }


}
