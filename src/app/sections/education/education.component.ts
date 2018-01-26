import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguageService } from '../../data-access/api/programming-language.service';
import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private _dao: ProgrammingLanguageService) { }

  ngOnInit() {
  }

}
