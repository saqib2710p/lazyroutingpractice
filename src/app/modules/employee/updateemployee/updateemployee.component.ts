import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  alert=false;




  




//   updateForm = new FormGroup({
//     name: new FormControl(''),
//     email:  new FormControl(''), 
//      phone:  new FormControl(''),
//       address:  new FormControl(''),
//       age:  new FormControl(''),
//  })
//   Id:number;
 
  constructor(private fb:FormBuilder,private emp:EmployeeService,private router:ActivatedRoute) {

   

  }

  ngOnInit(): void {


//     let x   = this.router.snapshot.params['id'];
//       this.Id = +x;


//     console.log(this.router.snapshot.paramMap.get('id'));
// this.emp.getByID(this.Id).subscribe((result)=>{
//   this.updateForm = new FormGroup({
//     name: new FormControl(result['Name']),
//     email:  new FormControl(result['Email']), 
//      phone:  new FormControl(result['Phone']),
//       address:  new FormControl(result['Address']),
//       age:  new FormControl(result['Age']),
//  })
// })



  }

  // onSubmit(){
  //   let x   = this.router.snapshot.params['id'];
  //   this.Id = +x;
  //   let employee: IEmployee = {
  //     Name: this.Name.value,
  //     Email: this.Email.value,
  //     Phone: this.Phone.value,
  //     Age: this.Age.value,
  
  //     Address: this.Address.value,
  
  //     ID: this.Id,
  //     department:[]
  //   }

  //     this.emp.updateEmployee(this.Id,employee).subscribe((result)=>{
  //       console.log(result,"Data Updated Successfull")
  //       this.alert=true;
  //       this.updateForm.reset();
  //     })
  // }

  // closeAlert(){
  //   this.alert=false;
  // }


  // setForm(emp: IEmployee) {
  //   this.Name.setValue(emp.Name);
  //   this.Email.setValue(emp.Email);
  //   this.Phone.setValue(emp.Phone);
  //   this.Age.setValue(emp.Age);
  //   this.Address.setValue(emp.Address);
    
  // }
  
  
  
  
  
  // public get Name(): FormControl {
  //   return this.updateForm.get('name') as FormControl;
  // }
  // public get Email(): FormControl {
  //   return this.updateForm.get('email') as FormControl;
  // }
  // public get Phone(): FormControl {
  //   return this.updateForm.get('phone') as FormControl;
  // }
  // public get Age(): FormControl {
  //   return this.updateForm.get('age') as FormControl;
  // }
  // public get Address(): FormControl {
  //   return this.updateForm.get('address') as FormControl;
  // }
  
  
}
