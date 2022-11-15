import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CooperativeSociety } from 'src/app/model/cooperative-society';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { SocietyServicesService } from 'src/app/services/society-services.service';

@Component({
  selector: 'app-update-society',
  templateUrl: './update-society.component.html',
  styleUrls: ['./update-society.component.css']
})
export class UpdateSocietyComponent implements OnInit {
  society:CooperativeSociety = new CooperativeSociety();
  societyId:number;
  success_msg:string="";
  warning:string="";
  constructor(private service:SocietyServicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.societyId = this.route.snapshot.params['societyId'];
    this.service.getSocietyById(this.societyId).subscribe(
      res=>
      {
        this.society = res;
      }, error => console.log(error));
  }

  initFunction() 
  {
    const container = document.getElementById("cont");
    const signUpBtn = document.getElementById("btn");

    signUpBtn?.addEventListener("click", ()=>{container?.classList.toggle("change");});
  }

  updateSociety()
  {
    this.service.updateSociety(this.societyId,this.society).subscribe
    (
      res=>
      {
        this.success_msg = "Society Updated Successfully";
      setTimeout(()=>
      {
        this.router.navigate(['/viewSocieties']);},3000)
      },
      err=>
      {
        console.log(err);
        console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
      });
  }


}
