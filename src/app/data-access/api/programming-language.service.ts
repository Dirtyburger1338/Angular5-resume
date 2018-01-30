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

      if (this.programmingLanguages.length > 0) {
        return this.programmingLanguages;
      }

      this.http.get<ProgrammingLanguages[]>(this.apiProgrammingUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new ProgrammingLanguages(
            response[i].Id,
            response[i].Language,
            this.generateStars(response[i].Stars),
            response[i].Description);

          this.programmingLanguages.push(tmp);
        }

      });

      return this.programmingLanguages;

    } catch (e) {
      console.log(e);
    } finally {
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
        lhsStarBuilder += '<span class="fa fa-star filled" style="color: #169eb6; font-size: 20px;"></span>';
      }

      for (let i = 0; i < rhsLength - lhsLength; i++) {
        rhsStarBuilder += '<span class="fa fa-star-o" style="color: #169eb6; font-size: 20px;"></span>';
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
