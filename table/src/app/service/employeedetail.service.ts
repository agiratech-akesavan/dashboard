
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../detail';


@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {

    // public url:string="http://localhost:3000/employee"
    public url:string="../../assets/employeedata.json"

  constructor(public http:HttpClient) { }

  getData():Observable<Detail[]>{
    return this.http.get<Detail[]>(this.url)
  }

  postData(data:any){
    return this.http.put(this.url,data);
  }
}