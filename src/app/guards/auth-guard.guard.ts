import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
	isLoggedUser$ : Observable<boolean>

	constructor(
		private store: Store<any>,
		private router : Router
	){
		this.isLoggedUser$ = store.select('auth')
	}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		this.isLoggedUser$.subscribe( response => {
			if(response){
				return true
			}else{
				this.router.navigate(['/account'])
				return false
			}

		})
		return  true 
  }
}
