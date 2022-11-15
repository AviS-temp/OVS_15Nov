import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NominatedCandidates } from '../model/nominated-candidates';

@Injectable({
  providedIn: 'root'
})
export class NomineeServiceService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:2700/candidate";

  private baseUrl2 = "http://localhost:2700/register";

  // nominee:NominatedCandidates
  public fillNomination(nominee:NominatedCandidates):Observable<any> // ,id:number
  {
    return this.http.post(`${this.baseUrl}/add`,nominee); // /${id} removed
  }

  public getCandidates():Observable<any>
  {
    return this.http.get("http://localhost:2700/candidate/getlist");
  }

  public getCandidatesString():Observable<any>
  {
    return this.http.get(`${this.baseUrl2}/getCandidates`);
  }

  public deleteCandidate(candidateId:number):Observable<any>
  {
    return this.http.delete("http://localhost:2700/candidate/delete/"+candidateId);
  }

  public getCandidateById(candidateId:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getBy/${candidateId}`);
  }

  public updateCandidate(candidateId:number,candidate:NominatedCandidates):Observable<any>
  {
    return this.http.put("http://localhost:2700/candidate/update/"+candidateId,candidate);
  }

  // 13 Nov
  public getCandidatesBySociety(voterId:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getList/${voterId}`);
  }

}
