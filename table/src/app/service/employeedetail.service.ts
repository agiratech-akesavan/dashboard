import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Detail } from '../detail';


@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {

  constructor(public http:HttpClient) { }

  getData():Observable<Detail[]>{
    return this.http.get<Detail[]>("../../assets/employeedetail.json")
  }
}
