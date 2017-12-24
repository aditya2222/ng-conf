import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { CommitteeComponent } from './committee/committee.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"callforpaper", component: CallForPaperComponent},
  {path:"speakers", component: SpeakersComponent},
  {path:"committee", component: CommitteeComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
