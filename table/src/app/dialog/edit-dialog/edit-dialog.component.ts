import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  
  employee:any=[]

  editForm=new FormGroup({
    email:new FormControl(this.data.employee.email),
    address:new FormControl(this.data.employee.address),
    city:new FormControl(this.data.employee.city)
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public route:Router,public DialogRef:MatDialogRef<EditDialogComponent>) { }


  ngOnInit( ): void {
  }

  close(){
    this.DialogRef.close()
  }

  save(value:any){
    this.employee={
      e_id:this.data.employee.e_id,
      first_name:this.data.employee.first_name,
      last_name:this.data.employee.last_name,
      company_name:this.data.employee.company_name,
      designation:this.data.employee.designation,
      gender:this.data.employee.gender,
      image:this.data.employee.image,
      phone:this.data.employee.phone,
      d_o_b:this.data.employee.d_o_b,
      email:value.email,
      address:value.address,
      city:value.city
    }
    this.DialogRef.close(this.employee);
  }

}
