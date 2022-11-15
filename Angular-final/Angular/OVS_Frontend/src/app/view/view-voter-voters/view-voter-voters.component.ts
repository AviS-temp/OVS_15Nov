import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-view-voter-voters',
  templateUrl: './view-voter-voters.component.html',
  styleUrls: ['./view-voter-voters.component.css']
})
export class ViewVoterVotersComponent implements OnInit {
  voters:RegisteredSocietyVoters[];
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  constructor(private service:VoterServicesService, private router:Router) { }

  ngOnInit(): void {
    this.getVoters();
  }

  getVoters()
  {
    this.service.getAllVoters().subscribe(
      res=>
      {
        this.voters = res;
      }
    )
  }

}
