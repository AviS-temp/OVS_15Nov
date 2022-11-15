import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeScan } from 'rxjs';
import { NominatedCandidates } from 'src/app/model/nominated-candidates';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { NomineeServiceService } from 'src/app/services/nominee-service.service';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-officer-welcome',
  templateUrl: './officer-welcome.component.html',
  styleUrls: ['./officer-welcome.component.css']
})
export class OfficerWelcomeComponent implements OnInit {

  totalCandidates:NominatedCandidates[];
  totalVoters:RegisteredSocietyVoters[];
  totalC:number;
  totalV:number;
  constructor(private router:Router, private serv:NomineeServiceService, private service:VoterServicesService) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("email");
    this.router.navigate(['/officer-login']);
  }

  viewVoters()
  {
    this.router.navigate(['/viewVoters']);
  }

  viewCandidates()
  {
    this.router.navigate(['/viewcandidatebyofficer']);
  }

  announce()
  {
    this.serv.getCandidates().subscribe(
      res=>
      {
        this.totalCandidates = res;
        this.totalC = this.totalCandidates.length;
      }
    )
    this.service.getAllVoters().subscribe(
      res=>
      {
        this.totalVoters = res;
        this.totalV = this.totalVoters.length;
      }
    )
    var Box = document.getElementById("msg") as HTMLInputElement;
    Box.style.display = "block";
    
  }

  viewResults()
  {
    this.router.navigate(['/results']);
  }
  toResult()
  {
    this.router.navigate(['/results'])
  }

}
