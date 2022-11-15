import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailDetails } from 'src/app/model/email-details';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-voter-forget',
  templateUrl: './voter-forget.component.html',
  styleUrls: ['./voter-forget.component.css']
})
export class VoterForgetComponent implements OnInit {
  email:EmailDetails = new EmailDetails();
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  recipient:string = "";
  voterIdCardNo:string = "";
  constructor(private service:VoterServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  getPassword()
  {
    this.service.getVoter(this.recipient).subscribe(
      res=>
      {
      this.email.msgBody = res.password;
      this.email.recipient = this.recipient;
      this.email.subject = "Your Password";
      console.log(res)
      this.service.getVoterId(this.email).subscribe()
      this.router.navigate(['/voter-login'])
      }
    )
  }

}
