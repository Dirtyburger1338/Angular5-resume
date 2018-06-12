import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Enviroment } from '../../classes/Enviroment';
import { environment } from '../../../environments/environment';

@Injectable()
export class EnviromentService {

  base: string;
  port: string;
  apiProgrammingUrl: string;
  content: Enviroment[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ':4201';
    }
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProgrammingUrl = this.base + '/api/resume/enviroments.php';
  }

  public getEnviroments(): any {
      return this.http.get<Enviroment[]>(this.apiProgrammingUrl);
  }
}
