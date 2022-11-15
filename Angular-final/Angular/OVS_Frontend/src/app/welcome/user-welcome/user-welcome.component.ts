import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {
  user:User;
  currentUser:any;
  constructor(private router:Router, private service:UserServiceService) { }

  ngOnInit(): void {
  }

  toRegister()
  {
    this.router.navigate(['/voterRegister']);
  }

  // November 9
  logout()
  {
    localStorage.removeItem("email");
    this.router.navigate(['/user-login']);
  }

  viewCandidates()
  {
    this.router.navigate(['/viewCandidates']);
  }

  deleteAccount()
  {
    this.router.navigate(['/deleteUser']);
  }

  updateAccount()
  {
    this.currentUser = localStorage.getItem("email");
    this.service.getUserByEmail(this.currentUser).subscribe(
      res=>
      {
        this.router.navigate(['updateUser',res.userId]);
      }

    )
  }

  toResult()
  {
    this.router.navigate(['/results'])
  }

}
