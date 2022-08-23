import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { filter } from 'rxjs';
import { FilterPipe } from './filter.pipe';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';


@NgModule({
  declarations: [
   EmployeeportalComponent,
   ShowemployeeComponent,
   AddemployeeComponent,
   EmployeedashboardComponent,
   FilterPipe,
   UpdateemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
   
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
