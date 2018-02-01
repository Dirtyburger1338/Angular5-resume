import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  backgroundImage: string;
  bgImgUrls: string[] = ['1.jpg', '2.jpg', '3.jpg'];
  number = 0;

  constructor() { }

  ngOnInit() {
    // this.backgroundImage = this.getRandomDividerImage();
    // document.getElementById('divider').style.backgroundImage = 'url(' + this.backgroundImage + ')';
  }

  getRandomDividerImage(): string {
    this.number = this.getRandomInt(0, this.bgImgUrls.length - 1);
    console.log(this.number);
    console.log(this.bgImgUrls[this.number]);

    return 'assets/images/rpt' + this.bgImgUrls[this.number];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
