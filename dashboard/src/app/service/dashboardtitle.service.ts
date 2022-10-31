import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface dashboardTitle{
  icon:string,
  title:string,
}


@Injectable({
  providedIn: 'root'
})
export class DashboardtitleService {

  constructor(public http:HttpClient) { }

  dashboardTitle():Observable<dashboardTitle>{
    return this.http.get<dashboardTitle>("../../assets/dashboardtitle.json");
  }
}
