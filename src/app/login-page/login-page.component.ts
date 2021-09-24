import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authServie: AuthService
  ) { }

    ngOnInit (): void {
     
  }

  async oiii(){
    const respose = await this.authServie.googleAuth()
    console.log(respose)
  }

}
