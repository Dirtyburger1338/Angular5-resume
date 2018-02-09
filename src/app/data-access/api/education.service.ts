import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Education } from '../../classes/Education';

@Injectable()
export class EducationService {

  apiProgrammingUrl = 'http://localhost:4201/education.php';
  content: Education[] = [];

  constructor(private http: HttpClient, sanitizer: DomSanitizer) { }

  public getEducations(): Education[] {
    try {
      if (this.content.length > 0) {
        return this.content;
      }

      this.http.get<Education[]>(this.apiProgrammingUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new Education(
            response[i].Id,
            response[i].ShortDescription,
            response[i].From,
            response[i].To,
            response[i].Heading,
            response[i].Context,
            'assets/images/' + response[i].Image
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
