import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDateComponent } from './tooltip-date.component';

describe('TooltipDateComponent', () => {
  let component: TooltipDateComponent;
  let fixture: ComponentFixture<TooltipDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
