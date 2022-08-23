import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.component.html',
  styleUrls: ['./showteacher.component.css']
})
export class ShowteacherComponent implements OnInit {
  teacherdata:any;
  searchdata:any;
 constructor() { 
    
 }

  ngOnInit(): void {
  //    let data:any = localStorage.getItem('addteacher');
  //   this.teacherdata =JSON.parse(data);
  //  console.log(this.teacherdata);
   
   this.teacherdata = JSON.parse(localStorage.getItem("addteacher") ||'[]')
    
    console.log(this.teacherdata);
   
   }

}
