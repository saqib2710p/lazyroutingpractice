import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {

  studentdata:any;
  search:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    // var users = localStorage.getItem('addtudent');


    this.studentdata = JSON.parse(localStorage.getItem("addtudent") ||'[]')
    
    console.log(this.studentdata);
   
   
  }

}
