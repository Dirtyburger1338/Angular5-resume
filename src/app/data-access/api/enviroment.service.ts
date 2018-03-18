import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Enviroment } from '../../classes/Enviroment';

@Injectable()
export class EnviromentService {

  base: string;
  port: string;
  apiProgrammingUrl: string;
  content: Enviroment[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.port = ':4201'; //window.location.port; //  // 
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProgrammingUrl = this.base + '/api/enviroments.php';
  }

  public getEnviroments(): Enviroment[] {
    try {
      if (this.content.length > 0) {
        return this.content;
      }

      this.http.get<Enviroment[]>(this.apiProgrammingUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new Enviroment(
            response[i].Id,
            response[i].ShortDescription,
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
