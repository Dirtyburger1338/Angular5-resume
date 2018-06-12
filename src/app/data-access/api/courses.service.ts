import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Courses } from '../../classes/Courses';

@Injectable()
export class CoursesService {

  base: string;
  port: string;
  apiCorsesWorkUrl: string;
  apiCorsesUniversityUrl: string;
  workContent: Courses[] = [];
  universityContent: Courses[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ':4201';
    }
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiCorsesUniversityUrl = this.base + '/api/resume/courses_university.php';
    this.apiCorsesWorkUrl = this.base + '/api/resume/courses_work.php';
  }

  public getWorkCourses(): any {
      return this.http.get<Courses[]>(this.apiCorsesWorkUrl);
  }

  public getUniversityCourses(): any {
      return this.http.get<Courses[]>(this.apiCorsesUniversityUrl);
  }
}
