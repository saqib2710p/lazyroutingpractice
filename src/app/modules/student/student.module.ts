import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLoginComponent } from './studentlogin/studentlogin.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';


@NgModule({
  declarations: [
    AddstudentComponent,
    DisplaystudentComponent,
    StudentportalComponent,
    StudentLoginComponent,
    StudentdashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class StudentModule {
  constructor(){
    console.log("student module loaded")
  }
 }
