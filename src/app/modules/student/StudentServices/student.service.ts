import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl='http://localhost:3000/student';

  constructor(private http:HttpClient) { }

  // getEmployees(){
  //   return this.http.get<Employee[]>(this.baseUrl);
  // }
  
  // postEmployees(employee:Employee){
  //   return this.http.post<Employee>(this.baseUrl, employee);
  // }

  // deleteEmployee(id:string){
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }

  adduser(student: any){
      let students: any[] =[];
      if(localStorage.getItem('addtudent')){
      students =student.JSON.parse(localStorage.getItem('addtudent'));
        students = [student , ...students];
      }else {
        students:[student];
      }
      localStorage.setItem('addtudent',JSON.stringify(students));
  
    }

}
