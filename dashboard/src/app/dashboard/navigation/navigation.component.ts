import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( public toggleService:ToggleService ) { }

  public value:boolean=false;
  public collapse:boolean=true;

  ngOnInit(): void {
  }

  toggle(){
    this.value=!this.value;
    this.toggleService.sending(this.value)
  }

}
