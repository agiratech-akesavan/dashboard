import { identifierName } from '@angular/compiler';
import { Component, ComponentRef, OnInit } from '@angular/core';
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

  //card inputs

  public orders:number=100;
  public onboarded:number=200;
  public login:number=10;
  public patients:number=20;

  public organization:number=2;
  public doctor:number=2;
  public staff:number=4;

  //charts input 

  public datails:any;
  public year:any[]=[];
  public color:any[]=[];
  public people:any[]=[];

  public datails1:any;
  public year1:any[]=[];
  public color1:any[]=[];
  public people1:any[]=[];

  public details2:any;
  public year2:number[]=[];
  public color2:string[]=[];
  public attented:any[]=[];
  public total:number[]=[];


  public datails3:any;
  public year3:any[]=[];
  public color3:any[]=[];
  public people3:any[]=[];


  public datails4:any;
  public year4:any[]=[];
  public color4:any[]=[];
  public people4:any[]=[];

  //data of the button

  public model:any={startDate:new Date()}

  public today=new Date();
  public dd=String(this.today.getDate()).padStart(2,"0");
  public mm=String(this.today.getMonth()).padStart(2,"0");
  public yyyy=this.today.getFullYear();

  public date=this.dd+"/"+this.mm+"/"+this.yyyy;

  constructor(public service:ChartServiceService) { 
    // console.log(this.data);
  }

  ngOnInit(): void {

    //chart data 0

    this.service.getData().subscribe(data=>{
      this.datails=data;
      if(this.datails != null){
        for(let detail of this.datails){
          this.color.push(detail.color);
          this.year.push(detail.year);
          this.people.push(detail.people);
        }
        this.renderCharts(this.color,this.year,this.people,"doughnut","charts");
      }
    });

    //chart data 1

    this.service.getData1().subscribe(data=>{
      this.datails1=data;
      if(this.datails1 !=null ){
        for(let detail of this.datails1){
          this.year1.push(detail.year);
          this.color1.push(detail.color);
          this.people1.push(detail.people);
        }
        this.renderCharts1(this.color1,this.year1,this.people1,"doughnut","charts1")
      }
    })
  
    //chart data 2

    this.service.getData2().subscribe(data => {
      this.details2=data;
      if(this.details2 != null){
        for(let i=0;i<this.details2.length;i++){
          this.year2.push(this.details2[i].year);
          this.color2.push(this.details2[i].color);
          // console.log(this.color2);
          this.attented.push(this.details2[i].attended);
          // console.log(this.attented);
          this.total.push(this.details2[i].total);
        }
      }
      this.renderCharts2(this.color2,this.year2,this.attented,"bar","charts2");
    });


    //chart data 3
    this.service.getData3().subscribe(data=>{
      this.datails3=data;
      if(this.datails3 != null){
        for(let detail of this.datails3){
          this.color3.push(detail.color);
          this.year3.push(detail.year);
          this.people3.push(detail.people);
        }
        this.renderCharts3(this.color3,this.year3,this.people,"bar","charts3");
      }
    });

    //chart data 4

    this.service.getData4().subscribe(data=>{
      this.datails4=data;
      if(this.datails4 != null){
        for(let detail of this.datails4){
          this.color4.push(detail.color);
          this.year4.push(detail.year);
          this.people4.push(detail.people);
        }
        this.renderCharts(this.color4,this.year4,this.people4,"bar","charts4");
      }
    });

  }

  renderCharts(color:any,year:any,people:any,type:any,id:any){
    const myChart = new Chart(id, {
      type: type,
      data: {
          labels: year,
          datasets: [{
              label: "Year of people",
              data:people,
              backgroundColor: color,
              borderColor:color,
              borderWidth: 1,
              // cutout:30,
              radius:50,
              barThickness:20,
              // innerStart:100
          }]
      },
      options: {
        respones:true,
        layout: {
            padding: 4,
        }
      }

  });
  }

  renderCharts1(color:any,year:any,people:any,type:any,id:any){
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
              // cutout:30,
              radius:50,
              // innerStart:100
          }]
      },
      options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 8
                    }
                }
            }
        }
    },
  });
  }

  renderCharts2(color:any,year:any,attended:any,type:any,id:string){
    const myChart = new Chart(id, {
      type: type,
      data: {
          labels: year,
          datasets: [{
              label: '# of Votes',
              data:attended,
              backgroundColor: color,
              borderColor:color,
              borderWidth: 1,
              barThickness:20,
          }]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  }

  renderCharts3(color:any,year:any,attended:any,type:any,id:string){
    const myChart = new Chart(id, {
      type: type,
      data: {
          labels: year,
          datasets: [{
              label: '# of Votes',
              data:attended,
              backgroundColor: color,
              borderColor:color,
              borderWidth: 1,
              barThickness:25,
          }]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  }

}
