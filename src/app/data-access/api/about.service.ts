import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Profile } from '../../classes/Profile';
import { Employment } from '../../classes/Employment';

@Injectable()
export class AboutService {
  base: string;
  port: string;
  apiProfileUrl: string;
  apiEmplymentUrl: string;
  profile: Profile;
  employments: Employment[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.port = ':4201';  //  window.location.port;
    this.base = 'http://' + window.location.hostname + this.port;
    this.apiProfileUrl = this.base + '/api/resume/profile.php';
    this.apiEmplymentUrl = this.base + '/api/resume/employments.php';
  }

  public getProfile(): any {
    try {
      return this.http.get<Profile>(this.apiProfileUrl);
    }
    catch (e) {
      console.log(e);
    }
    finally { }
  }

  public getEmplyments(): Employment[] {
    try {
      if (this.employments.length > 0) {
        return this.employments;
      }
      this.http.get<Employment[]>(this.apiEmplymentUrl).subscribe(response => {

        for (let i = 0; i < response.length; i++) {

          const tmp = new Employment(
            response[i].Id,
            response[i].From,
            response[i].To,
            response[i].Employer,
            response[i].EmployerLogo,
            response[i].Description
          );

          this.employments.push(tmp);
        }

      });

      return this.employments;
    }
    catch (e) {
      console.log(e);
    }
    finally { }
  }
}