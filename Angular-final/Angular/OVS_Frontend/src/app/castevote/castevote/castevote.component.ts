import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominatedCandidates } from 'src/app/model/nominated-candidates';
import { RegisteredSocietyVoters } from 'src/app/model/registered-society-voters';
import { VotedList } from 'src/app/model/voted-list';
import { NomineeServiceService } from 'src/app/services/nominee-service.service';
import { VotedlistService } from 'src/app/services/votedlist.service';
import { VoterServicesService } from 'src/app/services/voter-services.service';

@Component({
  selector: 'app-castevote',
  templateUrl: './castevote.component.html',
  styleUrls: ['./castevote.component.css']
})
export class CastevoteComponent implements OnInit {

  candidate:NominatedCandidates = new NominatedCandidates();
  candidates:NominatedCandidates[];
  votedlist:VotedList=new VotedList();
  voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
  candId:number=0;
  voterIdCardNo:string="";
  warning:string="";
  success_msg:string="";

  constructor(private service:NomineeServiceService,private serv:VoterServicesService,
    private route:ActivatedRoute,
    private voteslistserv:VotedlistService,
    private router:Router) { }

  ngOnInit(): void {
    this.voterIdCardNo = this.route.snapshot.params['voterIdCardNo'];
    this.service.getCandidatesBySociety(this.voterIdCardNo).subscribe(
      res=>
      {
        
        this.candidates = res;
        // for(let i=0;i<this.candidateS.length;i++)
        // {
        //  this.cn =  this.candidateS[i].split(',');
        //  console.log(this.cn);
        // }
        
      }
    )
  }

//   public casteVotes()
//   {
//     console.log(this.voter.voterIdCardNo);
//     console.log(this.votedlist.candidate.candidateId);
//   this.votedlist.voter=this.voter;
//   this.serv.casteVote(this.votedlist,this.voter.voterIdCardNo).subscribe(
//   res=>{
//     console.log(res);
//   }
// )

//   }
  
  public castedVote(candidate1:NominatedCandidates)
  {
    this.candidate=candidate1;
    console.log(this.candidate.candidateId)
    this.votedlist.candidateId= this.candidate.candidateId;
    console.log(this.votedlist.candidateId);
    this.voterIdCardNo = this.route.snapshot.params['voterIdCardNo'];
    // 13 Nov - for polling time

  this.serv.getVoterByVoterId(this.voterIdCardNo).subscribe(
    res=>
    {
      this.voter = res;
      this.votedlist.voterId = res.id;
      // this.votedlist.voter=this.voter;
      this.votedlist.societyId=res.society.societyId;
      let date:Date = new Date();

      this.votedlist.pollingDateTime = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+"::"+date.getHours()+":"+date.getMinutes();
      console.log(this.votedlist.societyId);
      console.log(this.voter);
      console.log(this.candidate.candidateId);
    
  this.voteslistserv.addVotedList(this.votedlist).subscribe(
    res=>
    {
      this.success_msg = "Your vote has been recorded";
      setTimeout(()=>
      {
        console.log(this.votedlist);
      console.log(res);
        this.router.navigate(['/voterwelcome']);},3000)
      
    },
    err=>
    {
      //console.log(err);
      console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
    }
  )
    },
    err=>
    {
      console.log(err);
      console.log(err.error.errorMsg);
        this.warning = err.error.errorMsg;
    }

  )
  
    
  }

}
