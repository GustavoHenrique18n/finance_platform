import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isRegisterComponent = false
  isPasswordComponent = false

  constructor() { }

    ngOnInit (): void {
     
  }

  isRegister (event:any) {
    this.isRegisterComponent = event
    this.isPasswordComponent = false
  }
  
  isPassword (event:any) {
    this.isPasswordComponent = event
  }

}
