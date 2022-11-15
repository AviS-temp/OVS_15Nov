import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { OfficerLoginComponent } from './login/officer-login/officer-login.component';
import { VoterLoginComponent } from './login/voter-login/voter-login.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { VoterRegisterComponent } from './register/voter-register/voter-register.component';
import { UserForgetComponent } from './forget/user-forget/user-forget.component';
import { HomeComponent } from './home/home/home.component';
import { OfficerRegisterComponent } from './register/officer-register/officer-register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserWelcomeComponent } from './welcome/user-welcome/user-welcome.component';
import { VoterWelcomeComponent } from './welcome/voter-welcome/voter-welcome.component';
import { AdminWelcomeComponent } from './welcome/admin-welcome/admin-welcome.component';
import { SocietyRegisterComponent } from './register/society-register/society-register.component';
import { ViewUsersComponent } from './view/view-users/view-users.component';
import { ViewSocietiesComponent } from './view/view-societies/view-societies.component';
import { UpdateUserComponent } from './update/update-user/update-user.component';
import { OfficerWelcomeComponent } from './welcome/officer-welcome/officer-welcome.component';
import { VoterForgetComponent } from './forget/voter-forget/voter-forget.component';
import { OfficerForgetComponent } from './forget/officer-forget/officer-forget.component';
import { ViewVotersComponent } from './view/view-voters/view-voters.component';
import { UpdateVoterComponent } from './update/update-voter/update-voter.component';
import { ViewVoterVotersComponent } from './view/view-voter-voters/view-voter-voters.component';
import { UpdateVoterVotersComponent } from './update/update-voter-voters/update-voter-voters.component';
import { NomineeRegisterComponent } from './register/nominee-register/nominee-register.component';
import { UpdateSocietyComponent } from './update/update-society/update-society.component';
import { ViewCandidatesComponent } from './view/view-candidates/view-candidates.component';
import { ViewCandidatesOfficerComponent } from './view/view-candidates-officer/view-candidates-officer.component';
import { UpdateCandidateComponent } from './update/update-candidate/update-candidate.component';
import { DeleteUserComponent } from './delete/delete-user/delete-user.component';
import { CastevoteComponent } from './castevote/castevote/castevote.component';
import { ResultsComponent } from './results/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    OfficerLoginComponent,
    VoterLoginComponent,
    UserRegisterComponent,
    VoterRegisterComponent,
    UserForgetComponent,
    HomeComponent,
    OfficerRegisterComponent,
    UserWelcomeComponent,
    VoterWelcomeComponent,
    AdminWelcomeComponent,
    SocietyRegisterComponent,
    ViewUsersComponent,
    ViewSocietiesComponent,
    UpdateUserComponent,
    OfficerWelcomeComponent,
    VoterForgetComponent,
    OfficerForgetComponent,
    ViewVotersComponent,
    UpdateVoterComponent,
    ViewVoterVotersComponent,
    UpdateVoterVotersComponent,
    NomineeRegisterComponent,
    UpdateSocietyComponent,
    ViewCandidatesComponent,
    ViewCandidatesOfficerComponent,
    UpdateCandidateComponent,
    DeleteUserComponent,
    CastevoteComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule // Add this or else pages invisible
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
