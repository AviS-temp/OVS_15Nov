import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-view-voters',
  templateUrl: './view-voters.component.html',
  styleUrls: ['./view-voters.component.css']
})

// 9 November
export class ViewVotersComponent implements OnInit {
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  voters:RegisteredSocietyVoters[];
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

  deleteVoter(voterIdCardNo:string)
  {
    this.service.deleteTheVoter(voterIdCardNo).subscribe(
      res=>
      {
        alert("Voter Deleted");
        this.ngOnInit();
      },
      err=>
      {
        console.log("Voter Not Deleted");
      }
    )

  }

  updateVoter(voterIdCardNo:string)
  {
    this.router.navigate(['updateVoter',voterIdCardNo]);
  }



}
