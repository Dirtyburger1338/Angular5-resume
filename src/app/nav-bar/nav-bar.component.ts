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
    this.hideGlobalSpinner();
  }

  hideGlobalSpinner() {
    $(document).ready(function () {
      $('#global-spinner').css('display', 'none');
    });
  }
}
