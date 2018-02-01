import { Component, OnInit } from '@angular/core';
import { Education } from '../../classes/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Educations: Education[] = [];

  constructor() { }

  ngOnInit() {
    this.Educations = this.getEducations();
  }

  getEducations(): Education[] {
    const arr = new Array();
    arr.push(new Education(1, 'Heading', 'Context', 'Image'));
    arr.push(new Education(2, 'Ost', 'Hej', 'Janne'));

    return arr;
  }

}
