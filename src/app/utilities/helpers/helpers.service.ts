import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }

  public concatStrings(a: string, b: string) : string {
    return a + b;
  }

  public appendImageAssetsFolderToString(data: any): any{
    for(let i = 0; i < data.length; i++){
      data[i].Image = this.concatStrings('assets/images/', data[i].Image);
    }
    return data;
  }

  public convertToStars(input: string): string {
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
        rhsStarBuilder += '<span class="fa fa-star-o" style="color: black; font-size: 20px; opacity: 0.7;"></span>';
      }

      returnValue = lhsStarBuilder + rhsStarBuilder;

    } catch (e) {
      console.log(e);
    }

    return returnValue;
  }
}
