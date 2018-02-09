import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';
import { ProgrammingLanguageService } from '../../data-access/api/programming-language.service';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
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
            style({ opacity: 0, transform: 'translateZ(100px)', offset: 0.5 }),
            style({ opacity: .5, transform: 'translateX(20px)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ]),

    trigger('descriptionHeader', [
      transition('* => *', [
        animate('.2s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-70px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

    trigger('descriptionBody', [
      transition('* => *', [
        animate('.2s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateX(100px)', offset: 0.0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
        ]))
      ])
    ]),

  ]
})
export class SkillsComponent implements OnInit {

  programmingLanguages: ProgrammingLanguages[] = [];
  programmingDescription: ProgrammingLanguages[] = [];

  constructor(private _dao: ProgrammingLanguageService) { }

  ngOnInit() {
    delay(0).then(() => {
      this.programmingLanguages = this._dao.getProgrammingLanguages();
    });
  }

  changeProgrammingDescription(index: number, $event: any) {
    for (let i = 0; i < this.programmingLanguages.length; i++) {
      if (this.programmingLanguages[i].Id === index) {
        this.programmingDescription[0] = this.programmingLanguages[i];
        break;
      }
    }

    this.openModal();
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  openModal() {

    if (window.innerWidth > 960) { return; }


    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    modal.style.display = 'block';

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
