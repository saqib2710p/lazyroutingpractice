import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { DisplayteacherComponent } from './displayteacher/displayteacher.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TeacherportalComponent } from './teacherportal/teacherportal.component';

const routes: Routes = [
  {
    path: '',component: TeacherportalComponent,
    children: [
      {path:'teacherlogin', component:TeacherloginComponent},
      { path: 'addteacher',canActivate: [AuthGuard], component: AddteacherComponent },
      { path: 'displayteacher',canActivate: [AuthGuard], component: DisplayteacherComponent }, 
      
      {path:'teacherdashboard',canActivate: [AuthGuard],component:TeacherdashboardComponent}
       
],  
  }, 

  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
