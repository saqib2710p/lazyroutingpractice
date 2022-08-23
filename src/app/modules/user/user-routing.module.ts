import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserdataComponent } from './adduserdata/userdata.component';
import { UserinfoComponent } from './displayuserdata/userinfo.component';
const routes: Routes = [
  
  
  


{
  path: '',component: UserinfoComponent,
  children: [
    { path: 'userdata',canActivate: [AuthGuard], component: UserdataComponent },
     
],  
}, 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
