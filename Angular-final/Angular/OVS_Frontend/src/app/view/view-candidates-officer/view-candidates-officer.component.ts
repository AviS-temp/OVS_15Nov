import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NominatedCandidates } from 'src/app/model/nominated-candidates';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { NomineeServiceService } from 'src/app/services/nominee-service.service';

@Component({
  selector: 'app-view-candidates-officer',
  templateUrl: './view-candidates-officer.component.html',
  styleUrls: ['./view-candidates-officer.component.css']
})
export class ViewCandidatesOfficerComponent implements OnInit {
  candidate:NominatedCandidates = new NominatedCandidates();
  candidates:NominatedCandidates[];
  society_Voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  constructor(private service:NomineeServiceService, private router:Router) { }

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

  deleteCandidate(candidateId:number)
  {
    this.service.deleteCandidate(candidateId).subscribe(
      ()=>
      {
        alert("Candidate Deleted");
        this.ngOnInit();
      }
    )
  }

  updateCandidate(candidateId:number)
  {
    this.router.navigate(['updateCandidate',candidateId]);
  }

}
