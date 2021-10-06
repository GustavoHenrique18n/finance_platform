import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-component',
  templateUrl: './create-new-component.component.html',
  styleUrls: ['./create-new-component.component.css']
})
export class CreateNewComponentComponent implements OnInit {
  @Input() amountPage = true

  buttonSelected = ''
  isClickedAmount = false
  isClickedExpense = false
  
  constructor() { }

  ngOnInit(): void {
  }
}

