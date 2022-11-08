import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, skipWhile, tap} from 'rxjs/operators'

export interface detail{
  id:number,
  first_name:string,
  last_name:string,
  email:string,
  company_name:string,
  designation:string,
  address:string,
  phone_number:string,
  date:string,
  city:string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {

  constructor(public http:HttpClient) { }

  getData():Observable<detail[]>{
    return this.http.get<detail[]>("../../assets/employeedetail.json")
  }
}
