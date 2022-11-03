import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor(public route:Router,public authservice:AuthServiceService) { }


  login(value:any){
    const data={
      username:value.username,
      password:value.password
    }
    // console.log(data);
    this.authservice.sendData(data).subscribe((res)=>localStorage.setItem("username",res.username));
  }

  ngOnInit(): void {
  }
  router(){
    // this.route.navigate(["dashboard"]);  
  }

}
