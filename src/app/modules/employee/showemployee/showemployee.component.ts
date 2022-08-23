import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
searchdata:any;
alert:boolean=false;
// employee:IEmployee[] = [];
//   Id: number;
  // constructor(private emp:EmployeeService,private route:Router ,private routers:ActivatedRoute) { }

  // ngOnInit(): void {
  //   let x   = this.router.snapshot.paramMap.get('id');
  //     this.Id = +x;
  //     console.log(this.Id);
  //     this._httpSer.getConfigByID(this.getAllEmployeeUrl,this.Id).subscribe(
  //      responce=>{
  //        this.employee=responce;
  //      }
  //     );




  // }

  // getdata(){
  //   this.emp.getemployees()
  //   .subscribe(data => this.employee =data)
  // }

  // deleteEmployeeClicked(val){
//     if(confirm("Are you sure delete?")){
// this.emp.deleteEmployee(val).subscribe(data =>{});
// this.emp.getemployees().subscribe((response)=>{
//   this.employee = response;
// })
//   }
// }
// updateemployee(ID){
// this.route.navigate(['/addemployee',ID]);
// }

// onupdate(){
//   this.emp.updateEmployee(this.putUrl,this.employee).subscribe(
//     res=>{
//       console.log(res);
//     }
//   );
// }
// onDelete(item){
  
//     if(confirm("Are you sure delete?")){
//       this.emp.deleteEmployee(item.ID).subscribe(data=>{
//         alert(data);
        
//       })
//   }

Employeedetail:Array<IEmployee>;
employee:IEmployee;


constructor(  private _httpServ : EmployeeService,
              private route : Router) {
  this.Employeedetail=new Array<IEmployee>();
  this.employee=new IEmployee();
}

ngOnInit(): void {
  this._httpServ.getemployees().subscribe(
    res=>{
      console.log(res);
      this.Employeedetail=res;
    }
  );

}


closealert(){
  this.alert=false;
}

onEdit(item){
  
  this._httpServ.getByID(item.ID).subscribe(
    response=>{
      this.employee=response;
    }
  );
  this.route.navigate(['/employee/addemployee',item.ID]);
}
onDelete(item,i){
  if(confirm("Are you sure delete?")){
          this._httpServ.deleteEmployee(item.ID).subscribe(data=>{
            this.employee=data;
           
            alert("Successfully Delete");
            
          })
          this.Employeedetail.splice(i,1); 
   this.alert=true;

    }
    else{
      alert("Something Went Wrong")
    }
  }

// onEdit(i:number){
//   this.adresss=this.employee.Adress[i];
//   this.employee.Adress.splice(i,1);


// }

}


