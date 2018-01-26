import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { ProgrammingLanguages } from '../../classes/ProgrammingLanguages';

@Injectable()
export class ProgrammingLanguageService {

  apiProgrammingUrl = 'http://localhost:4201/programming-languages.php';
  showProgrammingSpinner = true;
  programmingLanguages: ProgrammingLanguages[] = [];

  constructor(private http: HttpClient, sanitizer: DomSanitizer) { }

  public getProgrammingLanguages(): ProgrammingLanguages[] {
    try {
      this.http.get<ProgrammingLanguages[]>(this.apiProgrammingUrl).subscribe(respone => {

        for (let i = 0; i < respone.length; i++) {
          const tmp = new ProgrammingLanguages(respone[i].Id, respone[i].Language, this.generateStars(respone[i].Stars));
          this.programmingLanguages.push(tmp);
        }

      });

      return this.programmingLanguages;
    } catch (e) {
      console.log(e);
    } finally {
      this.showProgrammingSpinner = false;
    }
  }

  private generateStars(input: string): string {
    let result;
    let returnValue;

    try {

      if (input.indexOf('/') < 1) {
        return '';
      }

      result = input.split('/');

      const lhs = result[0];
      const rhs = result[1];

      const lhsLength = Number(lhs);
      const rhsLength = Number(rhs);

      let lhsStarBuilder = '';
      let rhsStarBuilder = '';

      for (let i = 0; i < lhsLength; i++) {
        lhsStarBuilder += '<span class="glyphicon glyphicon-star filled" style="color: crimson; font-size: 20px;"></span>';
      }

      for (let i = 0; i < rhsLength - lhsLength; i++) {
        rhsStarBuilder += '<span class="glyphicon glyphicon-star" style="color: #b3b3b3; font-size: 20px;"></span>';
      }

      returnValue = lhsStarBuilder + rhsStarBuilder;

    } catch (e) {
      console.log(e);
    }
    finally {

    }

    return returnValue;
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
