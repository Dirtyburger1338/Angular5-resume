import { Component, OnInit } from '@angular/core';
import { Education } from '../../classes/Education';
import { EducationService } from '../../data-access/api/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Educations: Education[] = [];

  constructor(private _daoEdu: EducationService) { }

  ngOnInit() {
    this.Educations = this.getEducations();
  }

  getEducations(): Education[] {
    this.Educations = this._daoEdu.getEducations();
    return this.Educations;
  }

}
