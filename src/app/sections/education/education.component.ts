import { Component, OnInit } from '@angular/core';

import { Education } from '../../classes/Education';
import { Courses } from '../../classes/Courses';

import { EducationService } from '../../data-access/api/education.service';
import { CoursesService } from '../../data-access/api/courses.service';
import { HelpersService } from '../../utilities/helpers/helpers.service';

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

  constructor(private _daoEdu: EducationService, private _daoCourses: CoursesService,  private _helperDao: HelpersService) { }

  ngOnInit() {
    this.getEducations();
    this.getWorkCourses();
    this.getUniversityCourses();
  }

  getEducations() {
    this._daoEdu.getEducations().subscribe(data => {
      data = this._helperDao.appendImageAssetsFolderToString(data);
      this.Educations = data;
    });
  }

  getWorkCourses() {
    this._daoCourses.getWorkCourses().subscribe(data => {
      data = this._helperDao.appendImageAssetsFolderToString(data);
      this.WorkCourses = data;
    });
  }

  getUniversityCourses() {
    this._daoCourses.getUniversityCourses().subscribe(data => {
      data = this._helperDao.appendImageAssetsFolderToString(data);
      this.UniversityCourses = data;
    });
  } 
}
