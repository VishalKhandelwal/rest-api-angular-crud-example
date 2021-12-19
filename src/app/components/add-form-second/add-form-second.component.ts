import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form-second',
  templateUrl: './add-form-second.component.html',
  styleUrls: ['./add-form-second.component.css']
})
export class AddFormSecondComponent implements OnInit {

  addEmployee = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl('F'),
    mobileNo: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.addEmployee.value);
  }

}
