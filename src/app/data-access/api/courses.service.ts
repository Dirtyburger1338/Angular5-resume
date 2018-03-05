import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Courses } from '../../classes/Courses';

@Injectable()
export class CoursesService {

  apiCorsesWorkUrl = 'http://localhost:4201/courses_work.php';
  apiCorsesUniversityUrl = 'http://localhost:4201/courses_university.php';
  workContent: Courses[] = [];
  universityContent: Courses[] = [];

  constructor(private http: HttpClient, sanitizer: DomSanitizer) { }

  public getWorkCourses(): Courses[] {
    try {
      if (this.workContent.length > 0) {
        return this.workContent;
      }

      this.http.get<Courses[]>(this.apiCorsesWorkUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new Courses(
            response[i].Id,
            response[i].ShortDescription,
            response[i].From,
            response[i].To,
            response[i].Heading,
            response[i].Context,
            'assets/images/' + response[i].Image,
            response[i].Introduction,
            response[i].List,
            response[i].Link
          );

          this.workContent.push(tmp);
        }

      });

      return this.workContent;
    } catch (e) {
      console.log(e);
    }
    finally { }
  }

  public getUniversityCourses(): Courses[] {
    try {
      if (this.universityContent.length > 0) {
        return this.universityContent;
      }

      this.http.get<Courses[]>(this.apiCorsesUniversityUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new Courses(
            response[i].Id,
            response[i].ShortDescription,
            response[i].From,
            response[i].To,
            response[i].Heading,
            response[i].Context,
            'assets/images/' + response[i].Image,
            response[i].Introduction,
            response[i].List,
            response[i].Link
          );

          this.universityContent.push(tmp);
        }

      });

      return this.universityContent;
    } catch (e) {
      console.log(e);
    }
    finally { }
  }
}
