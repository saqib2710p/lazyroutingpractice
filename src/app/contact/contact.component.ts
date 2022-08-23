import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  adduser = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    message: new FormControl(''),

  });

   Users:User[] = [];
   constructor(private userservice:UserService, private formBuilder:FormBuilder, private http:HttpClient,private forms:FormsModule){

    
  }
  ngOnInit(): void {
    this.userservice.getusers()
    .subscribe(data => this.Users =data)
    
  }

  addusers(){
    let usermessage:User ={
      name: this.Name.value,
      id: 0,
      email: this.Email.value,
      message:this.Message.value 
      
    }
      
    this.userservice.postusers(usermessage).subscribe((res:any)=>{
      this.Users.unshift(res);
      this.adduser.reset();
      console.warn();
    })
  }
  setForm(emp: User) {
    this.Name.setValue(emp.name);
    this.Email.setValue(emp.email);
    this.Message.setValue(emp.message);
   
}

public get Name(): FormControl {
  return this.adduser.get('name') as FormControl;
}
public get Email(): FormControl {
  return this.adduser.get('email') as FormControl;
}
public get Message(): FormControl {
  return this.adduser.get('message') as FormControl;
}

}
