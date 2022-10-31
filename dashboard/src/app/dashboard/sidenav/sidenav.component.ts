import { Component, OnInit } from '@angular/core';
import { DashboardtitleService } from 'src/app/service/dashboardtitle.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public titles:any;
  constructor(public service:DashboardtitleService) { }

  ngOnInit(): void {
    this.service.dashboardTitle().subscribe(data=>{
      return this.titles=data
    })
  }

  add(title:any){
    console.log(title.title);
  }

}
