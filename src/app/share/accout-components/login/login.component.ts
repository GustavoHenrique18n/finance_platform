import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output () register: EventEmitter<any> = new EventEmitter();
  @Output () password: EventEmitter<any> = new EventEmitter();

  isRegisterComponent = false
  isReplacePassword = false
  
	authCredentials = {
		email: '',
		password: ''
	}
  constructor(
		private authService: AuthService
	) { }

  ngOnInit(): void {
  }

  changeComponentRegister () {
    this.isRegisterComponent = true
    this.register.emit(this.isRegisterComponent)
  }

  changeComponentLogin () {
    this.isRegisterComponent = false
    this.isReplacePassword = false
    this.register.emit(this.isRegisterComponent)
  }

  changeComponentPassword (){
    this.isReplacePassword = true
    this.password.emit(this.isReplacePassword)
  }
	auth (){
		const formData = new FormData()
		formData.append('username', this.authCredentials.email)
		formData.append('password', this.authCredentials.password)

		this.authService.formAuth(formData) 
	}
}
