import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  profilePicture: string;
  email = 'me@henriklarsson.eu';
  name = 'Henrik Larsson';

  constructor() { }

  ngOnInit() {
    this.profilePicture = 'assets/images/profile-picture.jpg';
    this.name.bold;
  }

  ngAfterViewInit() {

  }
}
