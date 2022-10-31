import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface data{
  people:number;
  year:number;
  color:string
}

export interface data2{
  attended:number;
  total:number;
  year:number;
  color:string;
}

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(public http:HttpClient) { }

  getData():Observable<data>{
    return this.http.get<data>("../../assets/chart.json")
  }
  getData1():Observable<data>{
    return this.http.get<data>("../../assets/chart1.json")
  }
  getData2():Observable<data2>{
    return this.http.get<data2>("../../assets/chart2.json");
  }
  getData3():Observable<data>{
    return this.http.get<data>("../../assets/chart3.json");
  }
  getData4():Observable<data>{
    return this.http.get<data>("../../assets/chart4.json");
  }

}
