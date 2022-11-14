import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularMaterialModule } from 'src/app/material/angular-material/angular-material.module';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  
  stream:any;
  employee:any=[]
  image:any;
  updateImage:any
  localUpdataImage:any

  editForm=new FormGroup({
    email:new FormControl(this.data.employee.email),
    address:new FormControl(this.data.employee.address),
    city:new FormControl(this.data.employee.city),
    image:new FormControl(this.data.image),
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public route:Router,public DialogRef:MatDialogRef<EditDialogComponent>) { }


  ngOnInit( ): void {
    this.image=this.data.employee.image
  }

  takephoto(){
    navigator.mediaDevices.getUserMedia().then((rep)=>{
      console.log(rep)
      this.stream=rep
    }).catch((err)=>{
      console.log("The Errors :",err)
      alert("Your Device don't have Camera")
    })
  }

  upload(e:Event){
    const target = e.target as HTMLInputElement;
    if(target.files && target.files[0]){
      const file=target.files[0];

      const reader=new FileReader();
      reader.onload=e=>{
        this.updateImage=reader.result;
        this.localUpdataImage=this.updateImage;
      };
      reader.readAsDataURL(file)
    }
  }

  close(value:any){
    console.log(value.image);
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
      email:this.data.employee.email,
      address:this.data.employee.address,
      city:this.data.employee.city
    }
    this.DialogRef.close(this.employee)
  }

  save(value:any){
    this.employee={
      e_id:this.data.employee.e_id,
      first_name:this.data.employee.first_name,
      last_name:this.data.employee.last_name,
      company_name:this.data.employee.company_name,
      designation:this.data.employee.designation,
      gender:this.data.employee.gender,
      image:null,
      phone:this.data.employee.phone,
      d_o_b:this.data.employee.d_o_b,
      email:value.email,
      address:value.address,
      city:value.city
    }
    if(this.localUpdataImage){
      this.employee.image=this.localUpdataImage
    }else{
      this.employee.image=this.data.employee.image
    }
    this.DialogRef.close(this.employee);
  }

}
