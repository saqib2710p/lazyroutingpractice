import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { TeacherService } from '../TeacherServices/teacher.service';

@Component({
  selector: 'app-teacherportal',
  templateUrl: './teacherportal.component.html',
  styleUrls: ['./teacherportal.component.css']
})
export class TeacherportalComponent implements OnInit {
  search:any;
  ngOnInit(): void {
   
  }
  

}