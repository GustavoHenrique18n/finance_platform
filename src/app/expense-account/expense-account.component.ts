import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-account',
  templateUrl: './expense-account.component.html',
  styleUrls: ['./expense-account.component.css']
})
export class ExpenseAccountComponent implements OnInit {
  currentPage = false
  constructor() { }

  ngOnInit(): void {
  }

}
