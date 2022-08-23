import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {
  

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.teacherlogout();
  }

}
