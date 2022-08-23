import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { VoiceassistanceComponent } from './modules/hostal/voiceassistance/voiceassistance.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {

    path:'',
    children: [

      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
     
      {
        path: 'student',
        loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'teacher',
        loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
     
    ],
  },

  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {
    path: 'voice',
    component:VoiceassistanceComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
