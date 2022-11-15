import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotedList } from '../model/voted-list';

@Injectable({
  providedIn: 'root'
})
export class VotedlistService {
  private baseUrl = "http://localhost:2700/path";
  
  constructor(private http:HttpClient) { }

  public addVotedList(votedlist:VotedList):Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/add`,votedlist);
  }
}
