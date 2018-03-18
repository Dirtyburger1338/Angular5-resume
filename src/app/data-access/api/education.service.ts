import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Education } from '../../classes/Education';

@Injectable()
export class EducationService {

  base: string;
  port: string;
  apiProgrammingUrl: string;
  content: Education[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.port = ':4201'; //window.location.port; //  // 
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProgrammingUrl = this.base + '/api/education.php';
  }

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
