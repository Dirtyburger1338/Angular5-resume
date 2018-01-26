import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ContactComponent } from './sections/contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component:  AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component:  SkillsComponent},
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home' }
];


export const AppRoutingModule = RouterModule.forRoot(routes, {
    useHash: true
});
