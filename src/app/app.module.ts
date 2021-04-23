import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeComponent,
    NewemployeeComponent,
    HomeComponent,
    FeaturesComponent,
    EmployeesComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
