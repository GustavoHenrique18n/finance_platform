import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateCategorieComponent} from '../modals/create-categorie/create-categorie.component';

@Component({
  selector: 'app-create-new-component',
  templateUrl: './create-new-component.component.html',
  styleUrls: ['./create-new-component.component.css']
})
export class CreateNewComponentComponent implements OnInit {
  @Input() amountPage = true

  buttonSelected = ''
  isClickedAmount =  false
	isClickedExpense =  false
  constructor(
		private dialog:MatDialog
	) { }

  ngOnInit(): void {
  }
	
	addNewCategorie(){
		this.dialog.open(CreateCategorieComponent, {width:'500px', height:'200px'})
	}
}

