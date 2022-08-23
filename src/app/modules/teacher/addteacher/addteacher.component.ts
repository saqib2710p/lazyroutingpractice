import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { TeacherService } from '../TeacherServices/teacher.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent {
  addteachers = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    subject: new FormControl(''),
    address: new FormControl(''),

  });
  users:any=[];
  constructor(private tch:TeacherService,private fb:FormBuilder) { }

  

  addteacher(){
    let data = this.addteachers.value;
    
    this.users.push(data);

localStorage.setItem('addteacher', JSON.stringify(this.users));
// this.addstd(this.addstudent.value);
if(data){
  alert('Teacher Registered')
  // this.std.adduser('addtudent');
  this.addteachers.reset();
 
}else {
  alert('Something went wrong')
}
  }

  // adduser(user: any){


    
  //     let users: any[] =[];
  //     if(localStorage.getItem('addteacher')){
  //     users =user.JSON.parse(localStorage.getItem('addteacher'));
  //       users = [user , ...users];
  //     }else {
  //       users:[user];
  //     }
  //     localStorage.setItem('addteacher',JSON.stringify(users));
  
  //   }
 
}


 