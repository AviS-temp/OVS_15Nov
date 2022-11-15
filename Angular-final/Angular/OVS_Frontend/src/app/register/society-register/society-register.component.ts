import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativeSociety } from 'src/app/model/cooperative-society';
import { SocietyServicesService } from 'src/app/services/society-services.service';

@Component({
  selector: 'app-society-register',
  templateUrl: './society-register.component.html',
  styleUrls: ['./society-register.component.css']
})
export class SocietyRegisterComponent implements OnInit {
  society:CooperativeSociety = new CooperativeSociety();
  constructor(private service:SocietyServicesService, private router:Router) { }
  warning:string = ""; // Added Exceptions today - 11 Nov
  success_msg:string="";
  ngOnInit(): void {
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  registerSociety()
  {
    this.service.addSociety(this.society).subscribe(
      res=>
      {
        this.success_msg = "Society Added Successfully";
      setTimeout(()=>
      {
        console.log(res);
        this.router.navigate(['/adminwelcome']);},3000)
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

