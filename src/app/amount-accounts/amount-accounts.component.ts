import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-accounts',
  templateUrl: './amount-accounts.component.html',
  styleUrls: ['./amount-accounts.component.css']
})
export class AmountAccountsComponent implements OnInit {
  currentPage = true 

  constructor() { }

  ngOnInit(): void {
  }

}
