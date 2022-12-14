import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBannerCarosuelComponent } from './data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/"

  getBanData(){
    return this.http.get<IBannerCarosuelComponent[]>(`${this.apiUrl}bannerData`)
  }

  create(payload:IBannerCarosuelComponent){
    return this.http.post<IBannerCarosuelComponent>((`${this.apiUrl}bannerData`),payload);
  }
}
 