import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyInfoModalComponent } from '../share/modals/my-info-modal/my-info-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  myInfo () {
    this.dialog.open(MyInfoModalComponent , {
      width: '577px',
      height: '349px',
    })
  }
}
