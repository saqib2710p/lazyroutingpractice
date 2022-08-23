import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { Router, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import { ShowteacherComponent } from './showteacher/showteacher.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    LoginComponent,
   
    AdminComponent,
        AdminDashboardComponent,
        ShowteacherComponent,
        ShowstudentsComponent,
        FilterPipe
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class AdminModule { }
