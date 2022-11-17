import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from 'src/app/service/carousel-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images=true

  public data:any;
  constructor(public service:CarouselServiceService) {
   }

  ngOnInit(): void {
    this.service.getcarouseldata().subscribe({
      next:(data)=>this.data=data,
      error:(err)=>console.log(err)
    })
  }

}
