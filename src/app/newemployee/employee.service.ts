import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee2 } from './employee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    const employees : Employee2[]= [{
      id:1,
      employee_name:'Ravi',
      employee_salary: 2340,
      employee_age: 26,
      profile_image: ''
    },{
      id:2,
      employee_name:'Ashwin',
      employee_salary: 4320,
      employee_age: 34,
      profile_image: ''
    },{
      id:1,
      employee_name:'Kohli',
      employee_salary: 5423,
      employee_age: 32,
      profile_image: ''
    }];
    return employees;
  }
}
