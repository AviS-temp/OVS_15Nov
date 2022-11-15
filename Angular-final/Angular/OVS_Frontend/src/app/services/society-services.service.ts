import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CooperativeSociety } from '../model/cooperative-society';

@Injectable({
  providedIn: 'root'
})
export class SocietyServicesService {
// November 8
  society:CooperativeSociety = new CooperativeSociety();

  private baseUrl =  "http://localhost:2700/coop";
  constructor(private http:HttpClient) { }

  public addSociety(society:CooperativeSociety):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add`,society);
  }

  public getSocieties():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  public deleteSociety(societyId:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/delete/${societyId}`);
  }

  public getSocietyById(societyId:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getById/${societyId}`);
  }

  updateSociety(societyId:number,society:CooperativeSociety):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}/update/${societyId}`,society);
  }


  
}
