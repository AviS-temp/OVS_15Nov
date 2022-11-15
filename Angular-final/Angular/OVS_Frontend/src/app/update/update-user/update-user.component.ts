import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:User = new User();
  userId:number;
  success_msg:string="";
  warning:string="";
  constructor(private service:UserServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.service.getUserById(this.userId).subscribe(
      res=>
      {
        this.user = res;
      }, error => console.log(error));
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  updateUser()
  {
    this.service.updateUser(this.userId,this.user).subscribe
    (
      res=>
      {
        this.success_msg = "User Updated Successfully";
      setTimeout(()=>
      {
        this.router.navigate(['/viewUsers']);},3000)
      },
      err=>
      {
        console.log(err);
        console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
      });
  }

  

}
