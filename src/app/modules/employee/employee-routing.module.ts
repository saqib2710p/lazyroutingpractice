import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [

  {
    path: '',component: EmployeeportalComponent,
    children: [
      {path:'employeedashboard', component:EmployeedashboardComponent},
      { path: 'addemployee/:id', component: AddemployeeComponent },
      { path: 'addemployee', component: AddemployeeComponent },
      { path: 'showemployee', component: ShowemployeeComponent },
      { path: 'updateemployee', component: UpdateemployeeComponent },
       
],  
  }, 

 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
