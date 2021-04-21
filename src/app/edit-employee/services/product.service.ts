import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Employee } from '../employee';

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
  
  getProductList(){ //1. get the req from the component.
  //2. send the req to the Backend / REST API.
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    //3. get the res/data from the backend/ REST API.
    .pipe(map((res:any) =>  {
      return res; //4. Send the res/data to the component.
    }));
  }
}