import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User = new User();
  warning:string=""; // Added Exceptions today - 11 Nov
  success_msg:string="";

  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  registerUser()
  {
    this.service.register(this.user).subscribe(
      res=>
      {
        this.success_msg = "User Registered Successfully";
      setTimeout(()=>
      {
        console.log(res);
        this.router.navigate(['/user-login']);},3000)
        
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


