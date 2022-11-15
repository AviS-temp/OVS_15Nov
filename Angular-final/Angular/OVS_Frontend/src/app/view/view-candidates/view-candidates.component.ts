import { Component, OnInit } from '@angular/core';
import { NominatedCandidates } from 'src/app/model/nominated-candidates';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { NomineeServiceService } from 'src/app/services/nominee-service.service';

@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.css']
})
export class ViewCandidatesComponent implements OnInit {
  candidate:NominatedCandidates = new NominatedCandidates();
  candidates:NominatedCandidates[];
  candidateS:string[];
  society_Voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  constructor(private service:NomineeServiceService) { }
  cn:string[];
  ngOnInit(): void {
    this.service.getCandidates().subscribe(
      res=>
      {
        
        this.candidates = res;
        // for(let i=0;i<this.candidateS.length;i++)
        // {
        //  this.cn =  this.candidateS[i].split(',');
        //  console.log(this.cn);
        // }
        
      }
    )
  }




}
