import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormSecondComponent } from './add-form-second.component';

describe('AddFormSecondComponent', () => {
  let component: AddFormSecondComponent;
  let fixture: ComponentFixture<AddFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
