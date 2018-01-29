import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';
import { ProgrammingLanguageService } from '../../data-access/api/programming-language.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { SafeHtmlPipe } from '../../safe-html.pipe';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [

    trigger('skills', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('30ms', [
          animate('.4s ease-in-out', keyframes([
            //style({ opacity: 0, transform: 'translateX(-1000px)', offset: 0 }),
            style({ opacity: 0, transform: 'translateZ(100px)', offset: 0.5 }),
            style({ opacity: .5, transform: 'translateX(20px)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class SkillsComponent implements OnInit {

  programmingLanguages: ProgrammingLanguages[] = [];

  constructor(private _dao: ProgrammingLanguageService) { }

  ngOnInit() {
    delay(0).then(() => {
      this.programmingLanguages = this._dao.getProgrammingLanguages();
    });
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
