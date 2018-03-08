import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Enviroment } from '../../classes/Enviroment';

@Injectable()
export class EnviromentService {

  apiProgrammingUrl = 'http://localhost:4201/enviroments.php';
  content: Enviroment[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

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
