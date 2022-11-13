import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css']
})

// 8 November
export class VoterLoginComponent implements OnInit {
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  warning:string = ""; // Added Exceptions Today - 11 Nov
  constructor(private service:VoterServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  loginVoter()
  {
    this.service.login(this.voter).subscribe(
      res=>
      {
        console.log("Logged In");
        localStorage.setItem("VoterId",this.voter.voterIdCardNo);
        this.router.navigate(['/voterwelcome']);
      },
      err=>
      {
        console.log("Not Logged In");
        //alert("Incorrect Details");
        console.log(err.error.errorMsg);
        // window.location.reload();
        this.warning = err.error.errorMsg;
      }
    )
  }

}
