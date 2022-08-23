import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentLoginComponent } from './studentlogin/studentlogin.component';
import { StudentportalComponent } from './studentportal/studentportal.component';


const routes: Routes = [
  
  {
    path: '',component: StudentportalComponent,
    children: [
      {path:'studentlogin', component:StudentLoginComponent},
      { path: 'addstudent',canActivate:[AuthGuard], component: AddstudentComponent },
      { path: 'displaystudent',canActivate:[AuthGuard], component: DisplaystudentComponent },
      {path:'studentdashboard',canActivate:[AuthGuard],component:StudentdashboardComponent}
       
],  
  }, 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
