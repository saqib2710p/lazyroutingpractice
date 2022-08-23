import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IEmployee } from './modules/employee/employee';
import { EmployeeService } from './modules/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyroutingpractice';
name:any;
open:any;

  // addemployees = new FormGroup({
  //   name: new FormControl(''),
    
  //   age: new FormControl(''),
//   names1:any[]=[
//     "saq1",
//     "saqib2",
//     "sa3",
//     "saqi4"
//   ] 
// search:any;
  // });

  //  employee:IEmployee[] = [];

  constructor(private empservice:EmployeeService, private formBuilder:FormBuilder, private http:HttpClient){

    //  this.empservice.getemployees()
    //  .subscribe(data => this.employee =data)
  }
  // showSearchlist(){
  //          this.open=false;
  //          if(document.getElementsByClassName("search-data")[0] !=undefined){
  //           document.getElementsByClassName("search-data")[0].classList.add("d-none");
  //          }
  // }
  // hideSearchlist(){
  //   this.open=true;
  //   if(document.getElementsByClassName("search-data")[0] !=undefined){
  //    document.getElementsByClassName("search-data")[0].classList.remove("d-none");
  //   }
  // }
//   addemp(){
//     let employeee:IEmployee ={
//       name: this.Name.value,
//       age: this.Age.value,
//       id: 0
//     }
      
//     this.empservice.postEmployees(employeee).subscribe((res:any)=>{
//       this.employee.unshift(res);
//       this.addemployees.reset();
//       console.warn();
//     })
//   }
//   setForm(emp: IEmployee) {
//     this.Name.setValue(emp.name);
//     this.Age.setValue(emp.age);
// }

// public get Name(): FormControl {
//   return this.addemployees.get('name') as FormControl;
// }
// public get Age(): FormControl {
//   return this.addemployees.get('age') as FormControl;
// }

}
