import { Component, OnInit, HostListener } from '@angular/core';

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
    this.hideGlobalSpinner();
  }

  hideGlobalSpinner() {
    $(document).ready(function () {
      $('#global-spinner').css('display', 'none');
    });
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 0) {
      $('nav').removeClass('navbar');
      $('nav').addClass('navbarfixed');
    } else {
      $('nav').removeClass('navbarfixed');
      $('nav').addClass('navbar');
    }
  }

}
