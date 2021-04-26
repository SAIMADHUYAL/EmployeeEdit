import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId = ' ';
  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.employeeId = this.route.snapshot.paramMap.get('id') as string;
  }

}
