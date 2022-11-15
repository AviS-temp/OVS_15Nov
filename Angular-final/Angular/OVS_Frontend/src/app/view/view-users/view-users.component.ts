import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
//November 8
export class ViewUsersComponent implements OnInit {
  users:User[];
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers()
  {
    this.service.getUsers().subscribe(
      res=>
      {
        this.users = res;
      }
    )
  }

  deleteUser(userId:number)
  {
    this.service.deleteUser(userId).subscribe(
      res=>
      {
        alert("User Deleted");
        this.ngOnInit(); // To refresh immediately
      },
      err=>
      {
        console.log("User Not Deleted");
      }
    )
  }

  updateUser(userId:number)
  {
    this.router.navigate(['updateUser',userId]);
  }

}
