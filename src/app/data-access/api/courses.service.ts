import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Courses } from '../../classes/Courses';

@Injectable()
export class CoursesService {

  apiProgrammingUrl = 'http://localhost:4201/courses.php';
  content: Courses[] = [];

  constructor(private http: HttpClient, sanitizer: DomSanitizer) { }

  public getCourses(): Courses[] {
    try {
      if (this.content.length > 0) {
        return this.content;
      }

      this.http.get<Courses[]>(this.apiProgrammingUrl).subscribe(response => {

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

          this.content.push(tmp);
        }

      });

      return this.content;
    } catch (e) {
      console.log(e);
    }
    finally { }
  }
}
