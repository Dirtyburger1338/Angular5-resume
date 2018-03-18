import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { AboutService } from '../../data-access/api/about.service';
import { Profile } from '../../classes/Profile';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { Employment } from '../../classes/Employment';

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
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('aboutEmployer', [
      transition('* => *', [
        animate('.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(-100px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ])

  ]
})
export class AboutComponent implements OnInit {
  profile: Profile;
  employments: Employment[] = [];

  constructor(private _dao: AboutService) { }

  ngOnInit() {
    this.getProfileData();
    this.getEmplyments();
  }

  getProfileData() {
    this._dao.getProfile().subscribe(data => {
      this.profile = data;
      this.setAge(this.profile.DateOfBirth);
    });
  }

  getEmplyments() {
    this.employments = this._dao.getEmplyments();
    console.log(this.employments);
  }

  setAge(dateString) {
    this.profile.Age = this.getAge(dateString);
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

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
