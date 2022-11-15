import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDetails } from '../model/email-details';
import { RegisteredSocietyVoters } from '../model/registered-society-voters';

@Injectable({
  providedIn: 'root'
})
export class VoterServicesService {
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  private baseUrl = "http://localhost:2700/register";
  private mailUrl = "http://localhost:2700/mail";
  private societyUrl = "http://localhost:2700/coop"; // 13 Nov

  // November 8
  constructor(private http:HttpClient) { }

  public register(voter:RegisteredSocietyVoters):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add`,voter);
  }

  public login(voter:RegisteredSocietyVoters):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/login`,voter);
  }

  public getVoter(emailId:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getByIDMail/${emailId}`);
  }

  public getVoterId(email:EmailDetails):Observable<any>
  {
    
    return this.http.post(`${this.mailUrl}/sendMail`,email)
  }

  public getAllVoters():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  // 13 Nov
  public getAllSocieties():Observable<any>
  {
    return this.http.get(`${this.societyUrl}/getAll`);
  }



  public deleteTheVoter(voterIdCardNo:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/delete/${voterIdCardNo}`);
  }

  public updateTheVoter(voterIdCardNo:string, voter:RegisteredSocietyVoters):Observable<any>
  {
    return this.http.put(`${this.baseUrl}/update/${voterIdCardNo}`,voter);
  }

  public getVoterByVoterId(voterIdCardNo:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/voter/${voterIdCardNo}`);
  }

  
}
