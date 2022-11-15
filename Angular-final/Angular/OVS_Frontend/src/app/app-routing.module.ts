import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastevoteComponent } from './castevote/castevote/castevote.component';
import { DeleteUserComponent } from './delete/delete-user/delete-user.component';
import { OfficerForgetComponent } from './forget/officer-forget/officer-forget.component';
import { UserForgetComponent } from './forget/user-forget/user-forget.component';
import { VoterForgetComponent } from './forget/voter-forget/voter-forget.component';
import { HomeComponent } from './home/home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { OfficerLoginComponent } from './login/officer-login/officer-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { VoterLoginComponent } from './login/voter-login/voter-login.component';
import { NomineeRegisterComponent } from './register/nominee-register/nominee-register.component';
import { OfficerRegisterComponent } from './register/officer-register/officer-register.component';
import { SocietyRegisterComponent } from './register/society-register/society-register.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { VoterRegisterComponent } from './register/voter-register/voter-register.component';
import { ResultsComponent } from './results/results/results.component';
import { UpdateCandidateComponent } from './update/update-candidate/update-candidate.component';
import { UpdateSocietyComponent } from './update/update-society/update-society.component';
import { UpdateUserComponent } from './update/update-user/update-user.component';
import { UpdateVoterVotersComponent } from './update/update-voter-voters/update-voter-voters.component';
import { UpdateVoterComponent } from './update/update-voter/update-voter.component';
import { ViewCandidatesOfficerComponent } from './view/view-candidates-officer/view-candidates-officer.component';
import { ViewCandidatesComponent } from './view/view-candidates/view-candidates.component';
import { ViewSocietiesComponent } from './view/view-societies/view-societies.component';
import { ViewUsersComponent } from './view/view-users/view-users.component';
import { ViewVoterVotersComponent } from './view/view-voter-voters/view-voter-voters.component';
import { ViewVotersComponent } from './view/view-voters/view-voters.component';
import { AdminWelcomeComponent } from './welcome/admin-welcome/admin-welcome.component';
import { OfficerWelcomeComponent } from './welcome/officer-welcome/officer-welcome.component';
import { UserWelcomeComponent } from './welcome/user-welcome/user-welcome.component';
import { VoterWelcomeComponent } from './welcome/voter-welcome/voter-welcome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'officer-login',component:OfficerLoginComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'forget',component:UserForgetComponent},
  {path:'officer-register',component:OfficerRegisterComponent},
  {path:'userwelcome',component:UserWelcomeComponent},
  {path:'voterRegister',component:VoterRegisterComponent},
  {path:'voterwelcome',component:VoterWelcomeComponent},
  {path:'voter-login',component:VoterLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'adminwelcome',component:AdminWelcomeComponent},
  {path:'createSociety',component:SocietyRegisterComponent},
  {path:'viewUsers',component:ViewUsersComponent},
  {path:'viewSocieties',component:ViewSocietiesComponent},
  {path:'updateUser/:userId',component:UpdateUserComponent},
  {path:'officer-welcome',component:OfficerWelcomeComponent},
  {path:'voter-forget',component:VoterForgetComponent},
  {path:'officer-forget',component:OfficerForgetComponent},
  {path:'viewVoters',component:ViewVotersComponent},
  {path:'updateVoter/:voterIdCardNo',component:UpdateVoterComponent},
  {path:'viewVotersByVoter',component:ViewVoterVotersComponent},
  {path:'updateVoterByVoter/:voterIdCardNo',component:UpdateVoterVotersComponent},
  {path:'nominee-register',component:NomineeRegisterComponent},
  {path:'updateSociety/:societyId',component:UpdateSocietyComponent},
  {path:'viewCandidates',component:ViewCandidatesComponent},
  {path:'viewcandidatebyofficer',component:ViewCandidatesOfficerComponent},
  {path:'updateCandidate/:candidateId',component:UpdateCandidateComponent},
  {path:'deleteUser',component:DeleteUserComponent},
  {path:'casteVote/:voterIdCardNo',component:CastevoteComponent},
  {path:'results',component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
