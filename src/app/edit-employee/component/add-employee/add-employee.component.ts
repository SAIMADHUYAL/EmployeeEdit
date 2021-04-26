import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: Have the <form> equivalent to the ts side( mapping the <form> in the ts file.)

  addEmployee = new FormGroup({

    // step 2: Mapping the <form> elements in the ts file.
    name  : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)


    // step:3 coneecting html <form> to the above variables.


  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitAddEmployee(): any{
    console.log(this.addEmployee.value);
  }

}
