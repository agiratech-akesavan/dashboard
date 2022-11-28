import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentdetail } from '../studentdetail';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }

  getdata():Observable<Studentdetail>{
    return this.http.get<Studentdetail>("../../assets/student.json")
  }
}
