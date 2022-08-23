import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import{jsPDF} from "jspdf";
import { TeacherService } from '../../teacher/TeacherServices/teacher.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
@ViewChild('content',{static:false})el!:ElementRef;
userdata:any;

  ngOnInit(): void {
    
  

    this.userdata = JSON.parse(localStorage.getItem("addUser") ||'[]')
    
    console.log(this.userdata);
   
  } 


makepdf(){
  let pdf = new jsPDF('p','pt','letter',true);
  pdf.html(this.el.nativeElement,{
    callback: (pdf)=>{
      pdf.save("demo.pdf");
    },
    x:-100,
    y:0
  });
}

adduser = new FormGroup({
  fname: new FormControl(''),
  lname: new FormControl(''),
  phone: new FormControl(''),
  age: new FormControl(''),
  address: new FormControl(''),

});
users:any=[];
constructor(private fb:FormBuilder) { }



addUser(){
  let data = this.adduser.value;
  
  this.users.push(data);

localStorage.setItem('addUser', JSON.stringify(this.users));
// this.addstd(this.addstudent.value);
if(data){
alert('User Registered')
// this.std.adduser('addtudent');
this.adduser.reset();

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




