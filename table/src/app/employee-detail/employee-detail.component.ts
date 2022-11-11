import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from '../detail';
import { EmployeedetailService } from '../service/employeedetail.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDialogComponent } from '../dialog/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy,DoCheck {

  public id:any;
  public employeesubscribe:any;
  public employeeArray:Detail[]=[];
  public local:any;
  public employeedetail:Detail[]=[];
  public employee:any=[];



  constructor(
    public service:EmployeedetailService,
    public currentRoute:ActivatedRoute,
    public route:Router,
    public dialog:MatDialog
    ) { }
    ngDoCheck(): void {
      const update=JSON.parse(localStorage.getItem("employee")|| "{}")
      // console.log(update)
    }
  
  ngOnInit(): void {
    if(localStorage.getItem("employee") == null){
    this.id=this.currentRoute.snapshot.params["id"];
    this.employeesubscribe=this.service.getData().subscribe({
      next:(item)=>{
        this.employeeArray=item
      },
      error:(erro)=>console.log(erro),
      complete:()=>{
        // this.employee=(this.employeeArray.find(item=>item.e_id == this.id))
        this.local=(this.employeeArray.find(item=>item.e_id == this.id))
        localStorage.setItem("employee",JSON.stringify(this.local));
        this.employee=JSON.parse(localStorage.getItem("employee") || "{}");
        // console.log(this.employee);
      }
    })
    }else{
      this.employee=JSON.parse(localStorage.getItem("employee")||"{}")
      console.log(this.employee)
    }
    }
    
  ngOnDestroy(): void {
    // console.log("destroy")
    // this.employeesubscribe.unsubscribe();
  }

  dialogopen(){
    const dialogconfig=new MatDialogConfig();

    dialogconfig.data={
      employee:this.employee
    }

  //   this.dialog.open(EditDialogComponent,{ data: {
  //     employee:this.employee
  //  }})
    const dialogRef=this.dialog.open(EditDialogComponent,dialogconfig);


    dialogRef.afterClosed().subscribe({
     next:(data:any)=>{
      localStorage.setItem("employee",JSON.stringify(data))
     },
     error:(error:any)=>{
      console.log(error)
     },
     complete:()=>{
      console.log("completed")
      this.ngOnInit();
     }

    });


  }

  backFunc(){
    this.route.navigate(["table"])
    localStorage.removeItem("employee")
  }

}
