import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailDetails } from 'src/app/model/email-details';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';
import { ForgetPasswordService} from 'src/app/services/forget-password.service';
import { CooperativeSociety } from 'src/app/model/cooperative-society';

@Component({
  selector: 'app-voter-register',
  templateUrl: './voter-register.component.html',
  styleUrls: ['./voter-register.component.css']
})
export class VoterRegisterComponent implements OnInit {

  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  email:EmailDetails = new EmailDetails();
  warning:string=""; // Added Exceptions today - 11 Nov
  coopSociety:CooperativeSociety[]; // 13 Nov
  success_msg:string=""; // 13 Nov
  constructor(private service:VoterServicesService, private router:Router, private mailservice:ForgetPasswordService) { }

  ngOnInit(): void {
    this.service.getAllSocieties().subscribe(
      res=>
      {
        this.coopSociety=res;
        //this.voter.society.societyId=this.coopSociety[0].societyId;
      }
    )
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  registerVoter()
  {
    //
    this.voter.voterIdCardNo = this.voter.firstName.substring(0,2).toUpperCase().concat(this.voter.lastName.substring(0,2).toUpperCase()).concat(this.voter.mobileno.substring(0,3)).concat(this.voter.pincode.toString().substring(0,3));
    this.service.register(this.voter).subscribe(
      res=>
      {
        console.log(res);

        // 13 Nov
        //alert("Voter Registered");
       //this.success_msg = "Voter Registered";
      //  setTimeout(
      //   function() {
      //     var box = document.getElementById('succ') as HTMLInputElement;
      //     box.style.display='block';
      //   }, 2000);

      this.success_msg = "Voter Registration Successful";
      setTimeout(()=>
      {
        this.email.recipient = this.voter.emailId;
        this.email.msgBody = this.voter.voterIdCardNo;
        this.email.subject = "Your Voter ID";
        this.mailservice.getPasswordUser(this.email).subscribe()
        this.router.navigate(['/voter-login']);},3000)

        // this.email.recipient = this.voter.emailId;
        // this.email.msgBody = this.voter.voterIdCardNo;
        // this.email.subject = "Your Voter ID";
        // this.mailservice.getPasswordUser(this.email).subscribe()
        // this.router.navigate(['/voter-login']);
      },
      err=>
      {
        console.log(err);
        console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
        setTimeout(()=>
        {
          console.log("Registration failed");
          window.location.reload()},3000)
      }
    )
      }
    
  



}
