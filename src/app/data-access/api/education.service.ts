import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Education } from '../../classes/Education';

@Injectable()
export class EducationService {

  base: string;
  port: string;
  apiProgrammingUrl: string;
  content: Education[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ':4201';
    }
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProgrammingUrl = this.base + '/api/resume/education.php';
  }

  public getEducations(): any {
      return this.http.get<Education[]>(this.apiProgrammingUrl);
  }
}
