import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee2 } from './employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  employeeList : Employee2[] = [];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    //this.employeeList = this.employeeService.getEmployees();
    this.employeeService.getEmployeeList()
    .subscribe((res:any) => {
      console.log(res.data);
      this.employeeList = res.data;
    });
  }

}
