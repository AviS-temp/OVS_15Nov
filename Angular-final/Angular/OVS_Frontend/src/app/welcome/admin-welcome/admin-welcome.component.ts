import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createSociety()
  {
    this.router.navigate(['/createSociety']);
  }

  viewUsers()
  {
    this.router.navigate(['/viewUsers']);
  }

  viewSocieties()
  {
    this.router.navigate(['/viewSocieties']);
  }

  // 9 November
  logout()
  {
    localStorage.removeItem("email");
    this.router.navigate(['/admin-login']);
  }

  // 9 November
  addOfficer()
  {
    this.router.navigate(['/officer-register']);
  }

  addUser()
  {
    this.router.navigate(['/register']);
  }

  viewVoters()
  {
    this.router.navigate(['/viewVoters']);
  }

  viewCandidates()
  {
    this.router.navigate(['/viewCandidates']);
  }

  toResult()
  {
    this.router.navigate(['/results'])
  }


}
