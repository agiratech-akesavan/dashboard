import { BreakpointObserver } from '@angular/cdk/layout';
import {  AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
 
export class NavigationComponent implements OnInit,AfterViewInit {

//  @ViewChild('notication') notifies!:ElementRef;

  public badge:number=1;
  public douts:boolean=false
  public value:boolean=false;
  public collapse:boolean=true;

  
  constructor( public toggleService:ToggleService,public render:Renderer2,public observer:BreakpointObserver,public route:Router) { }


  
  ngAfterViewInit(){
    this.observer.observe(['(max-width:1024px)']).subscribe((res)=>{
      if(res.matches){
        this.douts=true;
        this.toggleService.sending(this.value)
      }else{
        this.douts=false;
      }
    })
  }

  ngOnInit(): void {
  }

  userLogout(){
    if(confirm("You need logout")){
      localStorage.removeItem("token");
      this.route.navigate(["/login"])
    }
  }

  toggle(){
    this.value=!this.value;
    this.toggleService.sending(this.value)
  }

  // notification(){
    // this.render.addClass(this.notifies.nativeElement,"display")
    
  // }
}
