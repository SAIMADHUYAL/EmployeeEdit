import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Called by Default
  constructor(private http: HttpClient) { }

  getEmployees(){
    const employees = [{
      employeeId: 1,
      firstName:  'Ramin',
      lastName: 'Ahmadi',
      salary: '2000',
      DOB:  '05/06/1994',
      email : 'hello@gmail.com',
    },{
      employeeId: 2,
      firstName:  'Ravi',
      lastName: 'Ashwin',
      salary: '5463',
      DOB:  '01/25/1987',
      email :   'raviashwin@gmail.com',
    },{
        employeeId: 3,
        firstName:  'Virat',
        lastName: 'Kohlli',
        salary: '3214',
        DOB:  '08/15/1987',
        email :   'kohlivirat@gmail.com',
    }];
    return employees;
  }
  

  getProductList(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}


//1. getting the request from the component
//2. sending the request to the Backend/ REST API.
//3. Getting the response from the Backend/ RESR API.
//4. sending the response to the component.