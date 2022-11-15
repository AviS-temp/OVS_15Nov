import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionOfficer } from 'src/app/model/election-officer';
import { EmailDetails } from 'src/app/model/email-details';
import { OfficerServicesService } from 'src/app/services/officer-services.service';

@Component({
  selector: 'app-officer-forget',
  templateUrl: './officer-forget.component.html',
  styleUrls: ['./officer-forget.component.css']
})
export class OfficerForgetComponent implements OnInit {
  officer:ElectionOfficer = new ElectionOfficer();
  email:EmailDetails = new EmailDetails();
  recipient:string = "";

  constructor(private service:OfficerServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  getPassword()
  {
    this.service.getOfficer(this.recipient).subscribe(
      res=>
      {
        this.email.msgBody = res.password;
        this.email.recipient = this.recipient;
        this.email.subject = "Confidential - Password";
        this.service.getPasswordOfficer(this.email).subscribe()
        this.router.navigate(['/officer-login']);
        
      }
    )
  }

}
