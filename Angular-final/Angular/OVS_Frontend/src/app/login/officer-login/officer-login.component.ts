import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionOfficer } from 'src/app/model/election-officer';
import { OfficerServicesService } from 'src/app/services/officer-services.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {
  officer:ElectionOfficer=new ElectionOfficer();
  warning:string = ""; // Added Exceptions Today - 11 Nov
  success_msg:string="";
  constructor(private service:OfficerServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  loginOfficer()
  {
    this.service.login(this.officer).subscribe(
      res=>
      {
        this.success_msg = "Officer Successfully Logged In";
        setTimeout(()=>
        {
          console.log("Logged In");
          localStorage.setItem("email",this.officer.emailId);
          this.router.navigate(['/officer-welcome']);},3000)
      },
      err=>
      {
        console.log("Not Logged In");
        console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
        setTimeout(()=>
        {
          console.log("Failed Logged In");
          window.location.reload()},3000)
      }
      
    )

  }

}
