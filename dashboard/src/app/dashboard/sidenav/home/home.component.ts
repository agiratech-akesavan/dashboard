import { Component, OnInit } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';
import { Chart,registerables } from "node_modules/chart.js"
import { ChartServiceService } from 'src/app/service/chart-service.service';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datails:any;
  public year:any[]=[];
  public color:any[]=[];
  public people:any[]=[];

  constructor(public service:ChartServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data=>{
      this.datails=data;
      if(this.datails != null){
        for(let detail of this.datails){
          this.color.push(detail.color);
          this.year.push(detail.year);
          this.people.push(detail.people);
        }
        this.renderCharts(this.color,this.year,this.people,"doughnut","charts1");
      }
    });
  }

  renderCharts(color:any,year:any,people:any,type:any,id:any){
    const myChart = new Chart(id, {
      type: type,
      data: {
          labels: year,
          datasets: [{
              label: '# of Votes',
              data:people,
              backgroundColor: color,
              borderColor:color,
              borderWidth: 1,
              cutout:30,
              radius:50,
              innerStart:100
          }]
      },
  });
  }

}
