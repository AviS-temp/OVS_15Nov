import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  user_login()
  {
    this.router.navigate(['/user-login']);
  }

  officer_login()
  {
    this.router.navigate(['/officer-login']);
  }

  voter_login()
  {
    this.router.navigate(['/voter-login']);
  }

  admin_login()
  {
    this.router.navigate(['/admin-login']);
  }

}
