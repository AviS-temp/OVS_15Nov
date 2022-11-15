import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionOfficer } from 'src/app/model/election-officer';
import { OfficerServicesService } from 'src/app/services/officer-services.service';

@Component({
  selector: 'app-officer-register',
  templateUrl: './officer-register.component.html',
  styleUrls: ['./officer-register.component.css']
})
export class OfficerRegisterComponent implements OnInit {
  officer:ElectionOfficer = new ElectionOfficer();
  warning:string = ""; // Added Exceptions today - 11 Nov
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

  registerOfficer()
  {
    this.service.addOfficer(this.officer).subscribe(
      res=>
      {
        this.success_msg = "Officer Registration Successful";
      setTimeout(()=>
      {
        console.log(res);
        this.router.navigate(['/officer-welcome']);},3000)
        
      },
      err=>
      {
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
