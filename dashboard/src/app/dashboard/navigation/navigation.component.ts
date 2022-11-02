import { BreakpointObserver } from '@angular/cdk/layout';
import {  AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  
  constructor( public toggleService:ToggleService,public render:Renderer2,public observer:BreakpointObserver) { }


  
  ngAfterViewInit(){
    this.observer.observe(['(max-width:768px)']).subscribe((res)=>{
      if(res.matches){
        this.douts=true;
      }else{
        this.douts=false;
      }
    })
  }

  ngOnInit(): void {
  }



  toggle(){
    this.value=!this.value;
    this.toggleService.sending(this.value)
  }

  // notification(){
  //   this.render.addClass(this.notifies.nativeElement,"display")
  // }
}
