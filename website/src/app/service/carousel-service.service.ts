import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from '../interface/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselServiceService {

  constructor(public http:HttpClient) {
   }

   getcarouseldata():Observable<Carousel>{
    return this.http.get<Carousel>("../../assets/carousel.json")
  }
}
