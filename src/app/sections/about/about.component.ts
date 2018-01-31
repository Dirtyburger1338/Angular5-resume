import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  profilePicture: string;
  email = 'me@henriklarsson.eu';
  name = 'Henrik Larsson';
  age: number;
  dateOfBirth = '1987-07-16';
  employer = 'Sogeti Sverige AB';
  city = 'Sundsvall, Sweden';
  occupation = ' - Software engineer';

  constructor() { }

  ngOnInit() {
    this.profilePicture = 'assets/images/profile-picture.jpg';
    this.setAge(this.dateOfBirth);
  }

  ngAfterViewInit() {

  }

  setAge(dateString) {
    this.age = this.getAge(dateString);
  }

  getAge(dateString): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
