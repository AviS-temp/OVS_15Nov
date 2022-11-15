import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// 8 November
export class UserServiceService {
  private baseUrl = "http://localhost:2700/user";
  user:User = new User();

  constructor(private http:HttpClient) { }


  public register(user:User):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/register`,user);
  }

  public login(user:User):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/login`,user);
  }

  public getUsers():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/viewAll`);
  }

  deleteUser(userId:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/delete/${userId}`);
  }

  updateUser(userId:number,user:User):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}/update/${userId}`,user);
  }

  public getUserById(userId:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/view/${userId}`);
  }

  public getUserByEmail(email:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/byEmail/${email}`);
  }


}
