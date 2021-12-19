import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormFirstComponent } from './add-form-first.component';

describe('AddFormFirstComponent', () => {
  let component: AddFormFirstComponent;
  let fixture: ComponentFixture<AddFormFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
