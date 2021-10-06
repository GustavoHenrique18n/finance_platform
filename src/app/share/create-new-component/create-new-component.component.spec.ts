import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewComponentComponent } from './create-new-component.component';

describe('CreateNewComponentComponent', () => {
  let component: CreateNewComponentComponent;
  let fixture: ComponentFixture<CreateNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
