import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/card';
import { CardServiceService } from 'src/app/service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cardData:any

  constructor( public service:CardServiceService) { 
  }
  
  ngOnInit():void {
    this.service.getdata().subscribe({
      next:(data)=>this.cardData=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("completed"),
    })
  }

}
