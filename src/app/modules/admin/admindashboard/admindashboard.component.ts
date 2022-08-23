import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

}
