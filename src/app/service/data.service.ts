import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ibackground, IBannerCarosuelComponent } from './data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/"

  getBanData(){
    return this.http.get<IBannerCarosuelComponent[]>(`${this.apiUrl}bannerData`).pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getNoticeData(){
    return this.http.get<IBannerCarosuelComponent[]>(`${this.apiUrl}notice-config`).pipe(map((res:any)=>{
      return res;
    }))
  }

  

 /*  postBanData(data:any){
  return this.http.post<IBannerCarosuelComponent[]>((`${this.apiUrl}bannerData`),data)
  .pipe(map((res:any)=>{  
    return res;
  }))

} */
postBanData(data:IBannerCarosuelComponent):Observable<any>{
return this.http.post<IBannerCarosuelComponent>((`${this.apiUrl}bannerData`),data)
}

postNoticeData(data:IBannerCarosuelComponent):Observable<any>{
  return this.http.post<IBannerCarosuelComponent>((`${this.apiUrl}notice-config`),data)
  }

updateBanData(id:string,data:any){
  return this.http.put<IBannerCarosuelComponent[]>((`${this.apiUrl}bannerData/`)+id,data)
  .pipe(map((res:any)=>{
    return res
  }))
}

updateNoticeData(id:string,data:any){
  return this.http.put<IBannerCarosuelComponent[]>((`${this.apiUrl}notice-config/`)+id,data)
  .pipe(map((res:any)=>{
    return res
  }))
}

deleteBanData(id:number){
  return this.http.delete<IBannerCarosuelComponent[]>((`${this.apiUrl}bannerData/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}
deleteNoticeData(id:number){
  return this.http.delete<IBannerCarosuelComponent[]>((`${this.apiUrl}notice-config/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}
}
 