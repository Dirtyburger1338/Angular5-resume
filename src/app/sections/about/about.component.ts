import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [

    trigger('name', [
      transition('* => *', [
        animate('.2s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(10px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('occupation', [
      transition('* => *', [
        animate('.4s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(10px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('aboutAge', [
      transition('* => *', [
        animate('.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(100px)', offset: 0.0 }),
          style({ opacity: 0, transform: 'translateY(0)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('aboutCity', [
      transition('* => *', [
        animate('.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(-50px)', offset: 0.0 }),
          // style({ opacity: 0, transform: 'translateX(100px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('aboutEmployer', [
      transition('* => *', [
        animate('.6s ease-in', keyframes([
          // style({ opacity: 0, transform: 'translateX(100px)', offset: 0.0 }),
          style({ opacity: 0, transform: 'translateY(-100px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ])

  ]
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
