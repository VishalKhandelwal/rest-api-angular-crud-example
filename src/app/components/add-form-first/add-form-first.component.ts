import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form-first',
  templateUrl: './add-form-first.component.html',
  styleUrls: ['./add-form-first.component.css']
})
export class AddFormFirstComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  addEmployee: FormGroup;


  ngOnInit() {
    this.addEmployee = this.formBuilder.group({
      name: [''],
      password: [''],
      email: [''],
      gender: ['M'],
      mobileNo: [''],
    })
  }

  onSubmit() {
    console.log(this.addEmployee.value);
  }

}
