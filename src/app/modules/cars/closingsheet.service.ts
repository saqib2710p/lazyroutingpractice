import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { closing } from './models/closingsheet';

@Injectable({
  providedIn: 'root'
})
export class ClosingsheetService {

  // headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accept','aplication/json');
  // httpOptions = {
  //   headers: this.headers
  // }

  constructor(private http:HttpClient) { }

// private _url:string ="http://localhost:3000/employee"

getSheets(): Observable<closing[]>{
  return this.http.get<closing[]>("http://localhost:3000/closing");
}

postSheet(closingsheet:closing){
  return this.http.post<closing>("http://localhost:3000/closing", closingsheet);
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

getByID(id:number){
  const link ="http://localhost:3000/closing/"+id;
  return this.http.get<any>(link);
   
}

// }
deletesheeet(id:number){

   const link = "http://localhost:3000/closing/"+id;
  return this.http.delete<closing>(link);
}
// updateEmployee(ID,data){
//   const link ="https://localhost:44372/api/employee/UpdateEmployee"+ID;
//   return this.http.put(link,data);
// }

updatesheet(sheet:closing,id:number){
   
  const link ="http://localhost:3000/closing/"+id;
  return this.http.put<closing>(link,sheet);

}
}
