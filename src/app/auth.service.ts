import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  constructor() { }

  async googleAuth (){
    const response = await this.instance.get('/oauth2/authorization/google')
    console.log(response.data)
  }
}
