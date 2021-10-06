import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAccountsComponent } from './amount-accounts.component';

describe('AmountAccountsComponent', () => {
  let component: AmountAccountsComponent;
  let fixture: ComponentFixture<AmountAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
