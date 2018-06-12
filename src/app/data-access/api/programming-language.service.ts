import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';

@Injectable()
export class ProgrammingLanguageService {

  base: string;
  port: string;
  apiProgrammingUrl: string;
  showProgrammingSpinner = true;
  programmingLanguages: ProgrammingLanguages[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ':4201';
    }
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProgrammingUrl = this.base + '/api/resume/programming-languages.php';
  }

  public getProgrammingLanguages(): any {
      return this.http.get<ProgrammingLanguages[]>(this.apiProgrammingUrl);
  } 
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
