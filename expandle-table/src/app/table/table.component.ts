import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { StudentService } from '../service/student.service';
import { Studentdetail } from '../studentdetail';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  dataSource:any;
  columnsToDisplay = ["roll_no","student_name","gender"];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  subjectName:any[]=[];
  obtained_mark:any=[];
  expand=["address","city","country"]
  mark:any=[]
  expandedElement: Studentdetail | null;

  displayed=["tamil","english","maths","science","social_science","total_mark"]
  
  constructor(public service:StudentService){}
  ngOnInit(): void {
    this.service.getdata().subscribe({
      next:(data)=>this.dataSource=data
    });


    const value=[
      {
        "tamil":Math.floor(Math.random()*100+1),
        "english":Math.floor(Math.random()*100+1),
        "maths":Math.floor(Math.random()*100+1),
        "science":Math.floor(Math.random()*100+1),
        "social_science":Math.floor(Math.random()*100+1),
      }
    ]
    this.subjectName=value;
  }

}



