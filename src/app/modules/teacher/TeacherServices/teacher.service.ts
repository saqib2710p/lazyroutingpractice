import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {
baseUrl='http://localhost:3000/teacher';

  

  constructor(private http:HttpClient) { }

  // adduser(user: any){
  //   let users: any[] =[];
  //   if(localStorage.getItem('Users')){
  //   users =user.JSON.parse(localStorage.getItem('Users'));
  //     users = [user , ...users];
  //   }else {
  //     users:[user];
  //   }
  //   localStorage.setItem('Users',JSON.stringify(users));

  // }

  // getEmployees(){
  //   return this.http.get<Employee[]>(this.baseUrl);
  // }
  
  // postEmployees(employee:Employee){
  //   return this.http.post<Employee>(this.baseUrl, employee);
  // }

  // deleteEmployee(id:string){
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }

}