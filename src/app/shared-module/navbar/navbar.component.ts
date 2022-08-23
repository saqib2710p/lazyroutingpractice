import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authservice/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }
search:any;


  ngOnInit(): void {
  }

  


}


