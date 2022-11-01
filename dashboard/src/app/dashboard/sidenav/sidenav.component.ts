import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DashboardtitleService } from 'src/app/service/dashboardtitle.service';
import { ToggleService } from 'src/app/service/toggle.service';
import { BreakpointObserver } from "@angular/cdk/layout"

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,AfterViewInit{

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  public value:any;
  public input:any="side";
  public titles:any;
  constructor(public service:DashboardtitleService,public toggleService:ToggleService,public observer:BreakpointObserver) {

    this.toggleService.value.subscribe(data=>this.value=data)
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:768px)']).subscribe((res)=>{
      if(res.matches){
        this.value=false;
        this.input="over"
        // this.sidenav.mode="over"
        // this.sidenav.close();
      }else{
        this.value=true;
        this.input="side"
        // this.sidenav.mode="side"
        // this.sidenav.open();
      }
    })
  }
  
  ngOnInit(): void {
    this.service.dashboardTitle().subscribe(data=>{
      return this.titles=data
    })
  }

  add(title:any){
    console.log(title.title);
  }

}
