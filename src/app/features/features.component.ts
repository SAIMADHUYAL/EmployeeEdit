import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styles: [
  ]
})
export class FeaturesComponent implements OnInit {

  constructor(private routerLink: Router) { }

  employeeDetails = {
    name: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
  }


  gotohomepage(){

    this.routerLink.navigate(['/']);
  }

  onEmployeeDetailsSubmit(){
    console.log(this.employeeDetails);
  }

}
