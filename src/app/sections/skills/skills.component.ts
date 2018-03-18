import { Component, OnInit } from '@angular/core';
import { Rating } from '../../classes/Rating';
import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';
import { ProgrammingLanguageService } from '../../data-access/api/programming-language.service';
import { EnviromentService } from '../../data-access/api/enviroment.service';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { Enviroment } from '../../classes/Enviroment';

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
  enviroments: Enviroment[] = [];
  rating: Rating[] = [];

  constructor(private _programmingDAO: ProgrammingLanguageService, private _enviromentService: EnviromentService) { }

  ngOnInit() {
    delay(0).then(() => {
      this.programmingLanguages = this._programmingDAO.getProgrammingLanguages();
    });
    this.enviroments = this._enviromentService.getEnviroments();
    this.loadRating();
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

  loadRating() {
    for (let i = 0; i < 5; i++) {
      this.rating.push(new Rating(i, '', ''));
      for (let j = 0; j <= i; j++) {
        this.rating[i].Stars += '<span class="fa fa-star filled" style="color: #169eb6; font-size: 20px;"></span>';
      }
    }

    for (let i = 0; i < this.rating.length; i++) {
      switch (i) {
        case 0:
          this.rating[i].Description = '- <span style="font-weight:600;">Basic knowledge</span>';
          break;
        case 1:
          this.rating[i].Description = '- <span style="font-weight:600;">Novice</span>';
          break;
        case 2:
          this.rating[i].Description = '- <span style="font-weight:600;">Intermediate</span>';
          break;
        case 3:
          this.rating[i].Description = '- <span style="font-weight:600;">Experienced</span>';
          break;
        case 4:
          this.rating[i].Description = '- <span style="font-weight:600;">Expert</span>';
          break;
        default:
          break;
      }
    }
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
