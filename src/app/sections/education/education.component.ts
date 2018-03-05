import { Component, OnInit } from '@angular/core';

import { Education } from '../../classes/Education';
import { Courses } from '../../classes/Courses';

import { EducationService } from '../../data-access/api/education.service';
import { CoursesService } from '../../data-access/api/courses.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Educations: Education[] = [];
  WorkCourses: Courses[] = [];
  UniversityCourses: Courses[] = [];
  counter = 0;

  constructor(private _daoEdu: EducationService, private _daoCourses: CoursesService) { }

  ngOnInit() {
    this.getEducations();
    this.getWorkCourses();
    this.getUniversityCourses();
  }

  getEducations() {
    this.Educations = this._daoEdu.getEducations();
  }

  getWorkCourses() {
    this.WorkCourses = this._daoCourses.getWorkCourses();
  }

  getUniversityCourses() {
    this.UniversityCourses = this._daoCourses.getUniversityCourses();
  }

}
