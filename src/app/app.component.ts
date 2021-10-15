import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  t = true
  isLogged$ : Observable<boolean>

	constructor ( private	store: Store<any>){

		this.isLogged$ = store.select('auth')

	}
}
