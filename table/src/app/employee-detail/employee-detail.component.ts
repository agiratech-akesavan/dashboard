import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from '../detail';
import { EmployeedetailService } from '../service/employeedetail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {

  public id:any;
  public employeesubscribe:any;
  public employeeArray:Detail[]=[];
  public employeedetail:Detail[]=[];
  public employee:any=[];



  constructor(public service:EmployeedetailService,public currentRoute:ActivatedRoute,public route:Router) { }

  ngOnInit(): void {
    this.id=this.currentRoute.snapshot.params["id"];
    this.employeesubscribe=this.service.getData().subscribe({
      next:(item)=>{
        this.employeeArray=item
      },
      error:(erro)=>console.log(erro),
      complete:()=>{
        this.employee=(this.employeeArray.find(item=>item.e_id == this.id))
      }
    })
    }

  ngOnDestroy(): void {
    this.employeesubscribe.unsubscribe();
  }

  backFunc(){
    this.route.navigate(["table"])
  }

}
