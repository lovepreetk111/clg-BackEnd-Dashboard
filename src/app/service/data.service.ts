import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ibackground, IBannerCarosuelComponent, IPlacementComponent, IResearchComponent } from './data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/"

  // ============================================ GET METHODS ===========================================================


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

  getResearchData() {
    return this.http.get<IResearchComponent[]>(`${this.apiUrl}researchData`).pipe(map((res:any)=>{
      return res;
    }))
  }

  getPlacementData() {
    return this.http.get<IPlacementComponent[]>(`${this.apiUrl}placementData`).pipe(map((res:any)=>{
      return res;
    }))
  }

  
// ================================================== POST METHODS =====================================================

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


postResearchData(data:IResearchComponent):Observable<any> {
    return this.http.post<IResearchComponent>((`${this.apiUrl}researchData`),data)
  }

  postPlacementData(data:IPlacementComponent):Observable<any>{
    return this.http.post<IPlacementComponent>((`${this.apiUrl}placementData`),data)
  }

// ================================================== UPDATE METHODS =====================================================


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

updateResearchData(id:string,data:any) {
  return this.http.put<IResearchComponent[]>((`${this.apiUrl}researchData/`)+id,data)
  .pipe(map((res:any)=>{
    return res
  }))
}

updatePlacementData(id:string,data:any) {
  return this.http.put<IPlacementComponent[]>((`${this.apiUrl}placementData/`)+id,data)
  .pipe(map((res:any)=>{
    return res
  }))
}


// =============================================== DELETE METHODS ========================================================

deleteBanData(id:string){
  return this.http.delete<IBannerCarosuelComponent[]>((`${this.apiUrl}bannerData/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}
deleteNoticeData(id:string){
  return this.http.delete<IBannerCarosuelComponent[]>((`${this.apiUrl}notice-config/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}

deleteresearchData(id: string) {
  return this.http.delete<IResearchComponent[]>((`${this.apiUrl}researchData/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}

deletePlacementData(id: string) {
  return this.http.delete<IPlacementComponent[]>((`${this.apiUrl}placementData/`)+id)
  .pipe(map((res)=>{
    return res;
  }))
}

// ==================================================================================



}
 