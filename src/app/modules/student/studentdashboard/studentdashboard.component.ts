import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.studentlogout();
  }


}
