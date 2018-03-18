import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    document.getElementById("global-spinner").style.display = 'none';
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 0) {
      let element = document.getElementById("navbar");
      element.classList.add("navbarfixed");
      element.classList.remove("navbar");
    } else {
      let element = document.getElementById("navbar");
      element.classList.add("navbar");
      element.classList.remove("navbarfixed");
    }
  }

}
