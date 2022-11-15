import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectionResult } from '../model/election-result';

@Injectable({
  providedIn: 'root'
})
export class ResultsServicesService {
  private baseUrl = "http://localhost:2700/result"
  result:ElectionResult = new ElectionResult();

  constructor(private http:HttpClient) { }
/** 
  public resultByCandiateId(id:number):Observable<any>
  {
      return this.http.get(`${this.baseUrl}/view/result/${id}`);
  }
*/

  public viewVotingPercentage():Observable<any>
  {
      return this.http.get(`${this.baseUrl}/view/voting/percentage`);
  }
  
  public viewCandidateVotingPercentage(id:number):Observable<any>
  {
      return this.http.get(`${this.baseUrl}/view/candidate/${id}`);
  }

  public viewHighestVotingPercentageCandiate():Observable<any>
  {
      return this.http.get<any>("http://localhost:2700/result/view/highest/percent");
  }

  public viewLowestVotingPercentageCandidate():Observable<any>
  {
      return this.http.get(`${this.baseUrl}/view/lowest/percent`);
  }

  public displayVotingStatistics():Observable<any>
  {
      return this.http.get(`${this.baseUrl}/display/stats`);
  }

  public displayPollingResult():Observable<any>
  {
      return this.http.get(`${this.baseUrl}/display/pollResult`);
  }
}
