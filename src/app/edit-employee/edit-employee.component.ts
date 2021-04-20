import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emplist: Employee[] = [{
    employeeId: 1,
    firstName:  'Ramin',
    lastName: 'Ahmadi',
    salary: '$2000',
    DOB:  '05/06/1994',
    email : 'hello@gmail.com',
  },{
    employeeId: 2,
    firstName:  'Ravi',
    lastName: 'Ashwin',
    salary: '$5463',
    DOB:  '21/01/1987',
    email :   'raviashwin@gmail.com',
  },{
      employeeId: 3,
      firstName:  'Virat',
      lastName: 'Kohlli',
      salary: '$3214',
      DOB:  '21/01/1987',
      email :   'kohlivirat@gmail.com',
  }];

  employee!: Employee;
  ShowEdit = false;

  EditEmp(employee: Employee) {
    this.ShowEdit = true;
    this.employee = employee;
	}

  UpdateEmp() {
    this.ShowEdit = false;
  }

}
