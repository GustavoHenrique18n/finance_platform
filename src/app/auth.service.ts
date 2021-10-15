import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import axios from 'axios';
import {isAuthenticated} from './state/actions/isAuthenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  HTTP = axios.create({
    baseURL: 'http://localhost:8080',
  });

  constructor(
		private store: Store<any>,
		private router: Router
	) { }

  	async formAuth (body:any) {
			try{

				await this.HTTP.post('/login' , body)
				this.router.navigate(['/perfil'])
				this.store.dispatch(isAuthenticated())

			}catch(err){
				console.log(err)
			}
		}
	/*	if(email == 'user' &&  senha == '123'){
							}else {
				console.log('falhou')
			}
*/
}
