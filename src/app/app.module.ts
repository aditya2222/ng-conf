import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { CommitteeComponent } from './committee/committee.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CallForPaperComponent,
    SpeakersComponent,
    CommitteeComponent,
    ContactUsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,


  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
