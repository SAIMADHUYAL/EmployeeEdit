import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee2 } from './employee2';
import { map } from 'rxjs/operators'; 

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

  getEmployeeList(){ //1. get the req from the component.
    //2. send the req to the Backend / REST API.
      return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      //3. get the res/data from the backend/ REST API.
      .pipe(map((res:any) =>  {
        return res; //4. Send the res/data to the component.
      }));
    }



}
