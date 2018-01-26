import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './sections/about/about.component';
import { HomeComponent } from './sections/home/home.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    NavBarComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
