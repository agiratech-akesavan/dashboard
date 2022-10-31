import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  public mobile:any=window.matchMedia("(min-width:768px)")
  constructor(){
    if(this.mobile.matches){
      alert("mobile")
    }
  };

}
