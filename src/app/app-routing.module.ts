import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEmployeeComponent } from './edit-employee/component/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './edit-employee/component/employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [

  {path : '',component : HomeComponent},
  {path : 'features',component : FeaturesComponent},

  {path: 'employees',children:[
    {path : '',component : EditEmployeeComponent},
    {path : 'add',component : AddEmployeeComponent},
    {path : ':id',component : EmployeeDetailsComponent},
  ]},


  {path : 'about',component : AboutComponent},
  {path : 'emp',redirectTo:'/employees',pathMatch : 'prefix'},
  {path : 'sai',redirectTo : 'features'},
  {path : '**',component : PageNotFoundComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
