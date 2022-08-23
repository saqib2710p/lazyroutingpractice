import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {

  teacherloginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/teacher/teacherdashboard']);
    }
  }
  onSubmit(): void {
    if (this.teacherloginForm.valid) {
      this.auth.login(this.teacherloginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/teacher/teacherdashboard']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}