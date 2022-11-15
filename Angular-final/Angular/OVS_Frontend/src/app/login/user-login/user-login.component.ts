import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
  warning:string = "";
  success_msg:string="";
  //November 8
  //Always declare private
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  loginUser()
  {
    this.service.login(this.user).subscribe(
      res=>
      {
        this.success_msg = "User Successfully Logged In";
        setTimeout(()=>
        {
          console.log("Logged In");
        localStorage.setItem("email",this.user.email);
        this.router.navigate(['/userwelcome']);},3000)
        
      },
      err=>
      {
        console.log("Not Logged In");
        this.warning = err.error.errorMsg;
        setTimeout(()=>
        {
          console.log("Failed Logged In");
          window.location.reload()},3000)
      }
    )
  }

}
