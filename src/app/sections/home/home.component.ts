import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  profilePicture: string;
  goals: string[] = [];
  email = 'me@henriklarsson.eu';
  name = 'Henrik Larsson';

  constructor() { }

  ngOnInit() {
    this.profilePicture = 'assets/images/profile-picture.jpg';
    this.goals.push('janne');
    this.goals.push('leffe');
  }

  ngAfterViewInit() {

  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }
}
