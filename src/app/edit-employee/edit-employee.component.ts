import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  emplist: Employee[] = [];
  //Gets called first
  constructor(private productService : ProductService) { }

  //This will be called by default just after the constructor is executed.
  ngOnInit(): void {

    this.emplist = this.productService.getEmployees();
  }


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
