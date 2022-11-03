import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface logindetail{
  username:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http:HttpClient) { }

  sendData(data:logindetail){
    return this.http.post<logindetail>("https://jsonplaceholder.typicode.com/posts",data);
    // localStorage.setItem("userName",data.username);
  }

}
