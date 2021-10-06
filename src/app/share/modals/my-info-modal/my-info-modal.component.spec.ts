import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoModalComponent } from './my-info-modal.component';

describe('MyInfoModalComponent', () => {
  let component: MyInfoModalComponent;
  let fixture: ComponentFixture<MyInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
