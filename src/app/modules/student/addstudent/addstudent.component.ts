import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../StudentServices/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  addstudent = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    class: new FormControl(''),
    address: new FormControl(''),

  });
  users: any = [];
  constructor(private std: StudentService, private fb: FormBuilder) { }

  addstudents() {
    let data = this.addstudent.value;
    
    this.users.push(data);

localStorage.setItem('addtudent', JSON.stringify(this.users));
if (data) {
  alert('Student Registered')
  // this.std.adduser('addtudent');
  this.addstudent.reset();

} else {
  alert('Something went wrong')
}
  }



// this.addstd(this.addstudent.value);



//   addstd(addstudent){
// let stds =[];


//   }




}

