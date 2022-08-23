import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdataComponent } from './adduserdata/userdata.component';
import { UserinfoComponent } from './displayuserdata/userinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserdataComponent,
    UserinfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule {
  constructor(){
    console.log("user module loaded")
  }
 }
