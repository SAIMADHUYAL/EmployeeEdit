import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './edit-employee/component/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './edit-employee/component/employee-details/employee-details.component';
import { LoginComponent } from './auth/component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeComponent,
    NewemployeeComponent,
    HomeComponent,
    FeaturesComponent,
    EmployeesComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
