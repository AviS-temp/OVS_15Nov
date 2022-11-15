import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDetails } from '../model/email-details';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  user:User = new User();
  private baseUrl = "http://localhost:2700/mail";
  constructor(private http:HttpClient) { }

  public getPasswordUser(email:EmailDetails):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/sendMail`,email)
  }


}
