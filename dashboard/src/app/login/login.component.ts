import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    password:new FormControl("",[Validators.required]),
  })

  get username():any{
    return this.loginForm.get("username");
  }

  get password():any{
    return this.loginForm.get("password");
  }

  constructor(public route:Router,public authservice:AuthServiceService) { }


  login(value:any){
    const data={
      username:value.username,
      password:value.password
    }
    // console.log(data);
    this.authservice.sendData(data)
    .subscribe({
      next:(response:any)=>{localStorage.setItem("token",response.username)},
      error:(error:any)=>{console.error(error)},
      complete:(complete?:any)=>{this.route.navigate(["/dashboard"])},

    });
    // this.route.navigate(["/dashboard"]); 
    // this.authservice.setToken();
  }
  button(){
    // this.route.navigate(["/dashboard"]); 
    // console.log("hello")
  }
  ngOnInit(): void {
  }
}
