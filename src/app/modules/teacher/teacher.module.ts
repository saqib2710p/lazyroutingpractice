import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { DisplayteacherComponent } from './displayteacher/displayteacher.component';
import { TeacherportalComponent } from './teacherportal/teacherportal.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TeacherService } from './TeacherServices/teacher.service';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AddteacherComponent,
    DisplayteacherComponent,
    TeacherportalComponent,
    TeacherloginComponent,
    TeacherdashboardComponent,
    FilterPipe
    
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  
    HttpClientModule
    
  ],
  
})
export class TeacherModule {
  constructor(){
    console.log("teacher module loaded")
  }
 }
