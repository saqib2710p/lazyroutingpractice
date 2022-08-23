import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentLoginComponent implements OnInit {
  studentloginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/student/studentdashboard']);
    }
  }
  onSubmit(): void {
    if (this.studentloginForm.valid) {
      this.auth.login(this.studentloginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/student/studentdashboard']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}