import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user:User = new User();
  warning:string = "";
  //November 8
  //Always declare private
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.service.login(this.user).subscribe(
      res=>
      {
        console.log("Logged In");
        //localStorage.setItem("email",this.user.email);
        this.service.deleteUser(res.userId).subscribe(
          res=>
          {
            this.router.navigate(['/user-login']);
          }
        )
       
      },
      err=>
      {
        console.log("Not Logged In");
        this.warning = err.error.errorMsg;
      }
    )
  }


}
