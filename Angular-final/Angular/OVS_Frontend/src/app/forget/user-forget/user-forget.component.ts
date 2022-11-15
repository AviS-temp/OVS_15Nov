import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailDetails } from 'src/app/model/email-details';
import { User } from 'src/app/model/user';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-forget',
  templateUrl: './user-forget.component.html',
  styleUrls: ['./user-forget.component.css']
})
export class UserForgetComponent implements OnInit {
  emailId:EmailDetails = new EmailDetails();
  recipient:string;
  constructor(private router:Router, private service:ForgetPasswordService, private userService:UserServiceService) { }

  ngOnInit(): void {

  }

  getPassword()
  {
    this.userService.getUserByEmail(this.recipient).subscribe(
      res=>
      {
        console.log(res);
        if(res==null)
        {
          alert("Email not registered");
          this.router.navigate(['/user-login']);
        }
        else
        {
          this.emailId.recipient = this.recipient;
          this.emailId.msgBody = res.password;
          this.emailId.subject = "Password";
          this.service.getPasswordUser(this.emailId).subscribe(
            res=>
            {
              
            }
            
          )
        }

      }
    )

  }

}
