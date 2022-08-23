import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';

import { LoginComponent } from './login/login.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { ShowteacherComponent } from './showteacher/showteacher.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
     {path:'admindashboard', canActivate: [AuthGuard],component:AdminDashboardComponent},
     {path:'showstudents',canActivate: [AuthGuard],component:ShowstudentsComponent},
     {path:'showteachers',canActivate: [AuthGuard],component:ShowteacherComponent},
      
       
],  
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
