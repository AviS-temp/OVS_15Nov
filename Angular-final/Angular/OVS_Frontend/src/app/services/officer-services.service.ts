import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectionOfficer } from '../model/election-officer';
import { EmailDetails } from '../model/email-details';

@Injectable({
  providedIn: 'root'
})
// 9 November
export class OfficerServicesService {
  officer:ElectionOfficer = new ElectionOfficer();
  emailId:string;
  constructor(private http:HttpClient) { }
  private baseUrl = "http://localhost:2700/officer";
  private mailUrl = "http://localhost:2700/mail";
  public addOfficer(officer:ElectionOfficer):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add`, officer);
  }

  public login(officer:ElectionOfficer):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/login`,officer);
  }

  public getOfficer(emailId:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/byEmail/${emailId}`);
  }

  public getPasswordOfficer(email:EmailDetails):Observable<any>
  {
    return this.http.post(`${this.mailUrl}/sendMail`,email)
  }
}
