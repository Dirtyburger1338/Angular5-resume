import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setFirstNavbarElementStyleOnLoad();
    this.hideGlobalSpinner();
  }

  setFirstNavbarElementStyleOnLoad() {
    const navbar = $('nav > ul > li');
    navbar[0].classList.add('link-active');
  }

  changeActiveLink(input) {
    this.resetLinksCss();
    input.path[1].classList.add('link-active');
  }

  resetLinksCss() {
    const navbar = $('nav > ul > li');

    for (let i = 0; i < navbar.length; i++) {
      navbar[i].classList.remove('link-active');
    }
  }

  hideGlobalSpinner() {
    $(document).ready(function () {
      $('#global-spinner').css('display', 'none');
    });
  }
}
