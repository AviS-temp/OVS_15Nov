import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CooperativeSociety } from 'src/app/model/cooperative-society';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-update-voter-voters',
  templateUrl: './update-voter-voters.component.html',
  styleUrls: ['./update-voter-voters.component.css']
})
export class UpdateVoterVotersComponent implements OnInit {
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  voterIdCardNo:string;
  success_msg:string="";
  warning:string="";
  coopSociety:CooperativeSociety[];
  constructor(private service:VoterServicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.voterIdCardNo = this.route.snapshot.params['voterIdCardNo'];
    this.service.getVoterByVoterId(this.voterIdCardNo).subscribe(
      res=>
      {
        this.voter = res;
      },
      err=>
      {
        console.log(err);
      }
    )
    this.service.getAllSocieties().subscribe(
      res=>
      {
        this.coopSociety=res;
      }
    )
  }


  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  updateVoter()
  {
    this.service.updateTheVoter(this.voterIdCardNo,this.voter).subscribe(
      res=>
      {
        this.success_msg = "User Updated Successfully";
      setTimeout(()=>
      {
        console.log("Updated Successfully");
        this.router.navigate(['/viewVotersByVoter']);},3000)
      },
      err=>
      {
        console.log(err);
        console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
      }
 
    )
  }

}
