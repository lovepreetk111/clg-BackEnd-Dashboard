import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IBannerCarosuelComponent } from '../service/data.interface';
import { DataService } from '../service/data.service';
interface Product {
  name: string;
  id:any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
allBanData:IBannerCarosuelComponent[]=[]



  constructor(private data:DataService) {
  }
  ngOnInit(): void {
    this.getBanData();
      }

      getBanData(){
        this.data.getBanData().subscribe((datas)=>{
          console.log(datas)
          this.allBanData = datas;
        })
      }
}    



