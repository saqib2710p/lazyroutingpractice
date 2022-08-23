import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeDepartment } from '../employeedepatment';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
 
  // show: boolean = false;
  // hide: boolean = false;
  // ngOnInit(): void {
  //   // this.Department.push(this.empdepart.values);
  //   this.Department.push(this.empdepart);
  // }

  // Employees: Array<IEmployee> = [];
  // public employeeForm: FormGroup;
  // empdepart: EmployeeDepartment;
  // public depart: FormGroup;

  // constructor(private fb: FormBuilder, private emp: EmployeeService) {
  //   this.employeeForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     address: ['', Validators.required],
  //     age: ['', Validators.required],
  //     Department: this.fb.group({
  //       departmentcode: ['', Validators.required],
  //       departmentname: ['', Validators.required],
  //       departmentfield: ['', Validators.required],

  //     })

  //   });
  //   this.depart = this.fb.group({
  //     departmentcode: ['', Validators.required],
  //     departmentname: ['', Validators.required],
  //     departmentfield: ['', Validators.required],
  //   });

  // }

  // toggle() {
  //   this.hide = !this.hide;
  // }



  // //to convert technology to FormArray 
  // // get dep() {
  // //   return this.employeeForm.get('Department') as FormArray;
  // // }




  // submitdepart() {
  //   this.empdepart.push(this.depart);
  //   console.log(this.empdepart)
  //   this.depart.reset();
  //   this.show = true;
  // }



  // onSubmit() {
  //   let dep: any = {
  //     departmentcode: this.DepartmentCode
  //   }

  //   let employee: IEmployee = {
  //     Name: this.Name.value,
  //     Email: this.Email.value,
  //     Phone: this.Phone.value,
  //     Age: this.Age.value,

  //     Address: this.Address.value,

  //     ID: 0,

  //     Department: []
  //   }
  //   console.log(this.employeeForm);
  //   this.emp.postEmployees(employee).subscribe((res) => {
  //     this.Employees.unshift(res);


  //     this.employeeForm.reset();
  //   })
  // }


  // setForm(emp: IEmployee, depart: EmployeeDepartment) {
  //   this.Name.setValue(emp.Name);
  //   this.Email.setValue(emp.Email);
  //   this.Phone.setValue(emp.Phone);
  //   this.Age.setValue(emp.Age);
  //   this.Address.setValue(emp.Address);
  //   this.Department.setValue(emp.Department);

  // }










  // public get Name(): FormControl {
  //   return this.employeeForm.get('name') as FormControl;
  // }
  // public get Email(): FormControl {
  //   return this.employeeForm.get('email') as FormControl;
  // }
  // public get Phone(): FormControl {
  //   return this.employeeForm.get('phone') as FormControl;
  // }
  // public get Age(): FormControl {
  //   return this.employeeForm.get('age') as FormControl;
  // }
  // public get Address(): FormControl {
  //   return this.employeeForm.get('address') as FormControl;
  // }
  // public get Department(): FormArray {
  //   return this.employeeForm.get('Department') as FormArray;
  // }
  // public get DepartmentCode(): FormArray {
  //   return this.depart.get('departmentcode') as FormArray;
  // }
  // public get DepartmentName(): FormArray {
  //   return this.depart.get('departmentname') as FormArray;
  // }
  // public get DepartmentField(): FormArray {
  //   return this.depart.get('departmentfield') as FormArray;
  // }
shows:boolean=false;
  show:boolean=false;
  Id:number;
  Ids:number;
  submit='submit';
  update='Update';
  employee:IEmployee;
  
  employee2:Array<IEmployee>;
  Department:EmployeeDepartment;

  
  constructor(
    private _httpSer:EmployeeService,
    private route : Router,
    private router: ActivatedRoute
    ) { 
    this.employee = new IEmployee();
    this.employee2 =  new Array<IEmployee>();
    this.Department=new EmployeeDepartment();
     this.employee.Department=[];
    
     this.Id=0;
  }

  

  ngOnInit(): void {
    let x   = this.router.snapshot.paramMap.get('id');
    this.Id = +x;
 console.log(this.Id);
  this._httpSer.getByID(this.Id).subscribe(data =>{
     console.log(data.Department);
   this.employee =data;     
    this.employee.Department=data.Department;
  });
  
    
  }
  onADD(){

    this.employee.Department.push(this.Department);
    console.log(this.employee.Department);
    this.Department=new EmployeeDepartment();

  }

  onSubmit()
  {
      this._httpSer.postEmployees(this.employee).subscribe(
        response =>{
          
         console.log(response);
        }
      );
      this.employee2.push(this.employee);
      this.employee=new IEmployee();
      this.show=true;
      // this.route.navigate(['/employee/showemployee']);
      this.Id =0;
      
  }
  // getAllEmployee(){
    
  //   this._httpSer.getConfig(this.getUrl).subscribe(
  //     response =>{
  //       this.employee2=response;
  //       alert(response);
  //     }
  //     );
  // }
  // GetEmployeeByID(){
  //   this._httpSer.getConfigByID(this.getUrl,this.ID).subscribe(
  //     response=>{
  //       console.log(response);
  //     }
  //   )
  // }
  onupdate(){debugger
    this._httpSer.updateEmployee(this.employee).subscribe(
      res=>{
        this.employee=res;

        console.log(res);
      }
     
    );
    this.shows=true;
  }

  closealerts(){
    this.shows=false;
  }
  closealert(){
    this.show=false;
  }
  onDelete(i:number){
    this.employee.Department.splice(i,1);
  }
  onEdit(i:number){debugger
    this.Department=this.employee.Department[i];
    this.employee.Department.splice(i,1);


  }


}


