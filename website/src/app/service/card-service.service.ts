import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../interface/card';


@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(public http:HttpClient) { }

  getdata():Observable<Card>{
    return this.http.get<Card>("../../assets/card.json")
  }

  getcarouseldata(){
    return this.http.get("../../assets/carousel.json")
  }
}
