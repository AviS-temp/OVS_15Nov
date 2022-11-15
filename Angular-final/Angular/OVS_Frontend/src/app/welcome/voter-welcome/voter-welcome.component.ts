import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';

@Component({
  selector: 'app-voter-welcome',
  templateUrl: './voter-welcome.component.html',
  styleUrls: ['./voter-welcome.component.css']
})
export class VoterWelcomeComponent implements OnInit {
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  voterIdCardNo:string = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("VoterId"));
  }

  logout()
  {
    localStorage.removeItem("email");
    this.router.navigate(['/voter-login']);
  }
  toResult()
{
  this.router.navigate(['/results']);
}

  updateDetails(voterIdCardNo:string)
  {
    this.router.navigate(['updateVoterByVoter',localStorage.getItem("VoterId")]);
  }

  viewVoterlist(){
    this.router.navigate(['/viewVotersByVoter']);
  }

  fillform()
  {
    this.router.navigate(['/nominee-register']);
  }

// 13 Nov
vote(voterIdCardNo:string)
{
  this.router.navigate(['/casteVote',localStorage.getItem("VoterId")]);

}

  myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck") as HTMLInputElement;
    // Get the output text
    var nom = document.getElementById("nom") as HTMLInputElement;
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      nom.style.display = "block";
    } else {
      nom.style.display = "none";
    }
  }

}


