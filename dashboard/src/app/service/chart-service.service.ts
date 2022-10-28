import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface data{
  people:number;
  year:number;
  color:string
}

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(public http:HttpClient) { }

  getData():Observable<data>{
    return this.http.get<data>("../../assets/chart.json")
  }
}
