import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private _url:string ="http://localhost:3000/usermessage"
  
  getusers(): Observable<User[]>{
    return this.http.get<User[]>(this._url);
  }
  
  postusers(user:User){
    return this.http.post<User>(this._url, user);
  }
  
  
  }
  