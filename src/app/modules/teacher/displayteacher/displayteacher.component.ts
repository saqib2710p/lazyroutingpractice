import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-displayteacher',
  templateUrl: './displayteacher.component.html',
  styleUrls: ['./displayteacher.component.css']
})
export class DisplayteacherComponent implements OnInit {
  search:any;
  // teacherdata:any;
  // constructor() { 
    
  // }

  // ngOnInit(): void {
  //   let data:any = localStorage.getItem('addteacher');
  //   this.teacherdata =JSON.parse(data);
  //   console.log(this.teacherdata);
   
   
  // }

  studentdata:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    // var users = localStorage.getItem('addtudent');


    this.studentdata = JSON.parse(localStorage.getItem("addtudent") ||'[]')
    
    console.log(this.studentdata);
   
   
  }

 
}