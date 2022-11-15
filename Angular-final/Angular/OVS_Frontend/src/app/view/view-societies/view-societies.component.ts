import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CooperativeSociety } from 'src/app/model/cooperative-society';
import { SocietyServicesService } from 'src/app/services/society-services.service';

@Component({
  selector: 'app-view-societies',
  templateUrl: './view-societies.component.html',
  styleUrls: ['./view-societies.component.css']
})
export class ViewSocietiesComponent implements OnInit {
  societies:CooperativeSociety[];
  constructor(private service:SocietyServicesService, private router:Router) { }

  ngOnInit(): void {
    this.getSocieties();
  }

  getSocieties()
  {
    this.service.getSocieties().subscribe(
      res=>
      {
        this.societies = res;
      }
    )
  }

  delete(societyId:number)
  {
    this.service.deleteSociety(societyId).subscribe(
      res=>
      {
        alert("Society Deleted");
        this.ngOnInit(); // To refresh immediately
      },
      err=>
      {
        console.log("Society Not Deleted");
      }
    )
  }

  update(societyId:number)
  {
    this.router.navigate(['updateSociety',societyId]);
  }

}
