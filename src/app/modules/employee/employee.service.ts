import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵisListLikeIterable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from './employee';
import { EmployeeFetch } from './employee-fetch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accept','aplication/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http:HttpClient) { }

// private _url:string ="http://localhost:3000/employee"

getemployees(): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>("https://localhost:44372/api/employee/GetEmployeeData");
}

postEmployees(employee:IEmployee){
  return this.http.post<IEmployee>("https://localhost:44372/api/employee/PostEmployeeData", employee);
}

// deleteEmployee(ID:number):Observable<IEmployee>{
//   const _url = `${"http://localhost:44372/api/employee/deleteEmployee"}/${ID}`;
//   return this.http.delete<IEmployee>("http://localhost:44372/api/employee/deleteEmployee",this.httpOptions);
// }
// getupdateEmployee(ID:number):Observable<IEmployee>{
//   const _url = `${this._url}/${ID}`;
//   return this.http.get<IEmployee>(_url,this.httpOptions);
// }
// updateEmployee(employee:EmployeeFetch):Observable<IEmployee>{
//   const _url = `${this._url}/${employee.ID}`;
//   return this.http.put<IEmployee>(_url,this.httpOptions).pipe(map(()=>employee));
// }

getByID(ID:number){
  const link ="https://localhost:44372/api/employee/GetEmployeeDataByID?ID="+ID;
  return this.http.get<any>(link);
   


}
deleteEmployee(ID:number){

   const link = "https://localhost:44372/api/employee/deleteEmployee?ID="+ID;
  return this.http.delete<IEmployee>(link);
}
// updateEmployee(ID,data){
//   const link ="https://localhost:44372/api/employee/UpdateEmployee"+ID;
//   return this.http.put(link,data);
// }

updateEmployee(emp:IEmployee){
   
  const link ="https://localhost:44372/api/employee/UpdateEmployee";
  return this.http.post<IEmployee>(link,emp);

}
}
