import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativeSociety } from 'src/app/model/cooperative-society';
import { NominatedCandidates } from 'src/app/model/nominated-candidates';
import { NomineeServiceService } from 'src/app/services/nominee-service.service';
import { ResultsServicesService } from 'src/app/services/results-services.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  stats = new Map<string, number>();
  results= new Map<string,number>();
  id:number;
  pollPercent: number;
  votePercent:number;
  nCH: NominatedCandidates;
  cH: number;
  nCL: NominatedCandidates;
  cL: number;
  candidates: NominatedCandidates[];
  selectedValue: number;
  societies: CooperativeSociety[];



  constructor(private router: Router, private service: ResultsServicesService, private serv: NomineeServiceService) {



}

  ngOnInit(): void {

      

      this.viewVotingPercentage();

      this.getCandidates(); // 13 Nov

      this.displayPollingResult();

      this.viewLowestVotingPercentage();

      this.displayVotingStatistics();

      this.viewHighestVotingPercentage(); //-- errors in this 
  }

  getCandidates() {
    this.serv.getCandidates().subscribe(
      res => {
        this.candidates = res;
      }
    )
  }
  viewCandidateVotingPercentage(id: number) {
    this.service.viewCandidateVotingPercentage(id).subscribe(
      res=>
      {
        this.votePercent=res;
        console.log(res);
      }

    )
  }

  viewVotingPercentage() {
    this.service.viewVotingPercentage().subscribe(
      res => {
        this.pollPercent = res;

      },
      err => {
        console.log(err);
      }
    )
  }

  // 14 Nov - showing errors
  viewHighestVotingPercentage() {
    // Backend problem
    this.service.viewHighestVotingPercentageCandiate().subscribe(
      res => {
        this.nCH = res;
        this.service.viewCandidateVotingPercentage(this.nCH.candidateId).subscribe(
          res => {
            this.cH = res;
          }
        )

      }
    )
  }
  viewLowestVotingPercentage() {
    this.service.viewLowestVotingPercentageCandidate().subscribe(
      res => {
        this.nCL = res;
        this.service.viewCandidateVotingPercentage(this.nCL.candidateId).subscribe(
          res => {
            this.cL = res;
          }
        )
      }
    )
  }
  displayVotingStatistics(){
    this.service.displayVotingStatistics().subscribe(
      res => {
        this.stats = res;
      }
    )
  }
  displayPollingResult()
  {
    this.service.displayPollingResult().subscribe(
      res=>
      {
        this.results=res;
      }
    )
  }

}
