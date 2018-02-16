import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  smallScreen = false;

  constructor() {
    // if (windows.screen.width <= 768) {
    //   this.smallScreen = true;
    // }
  }

  ngOnInit() {
    if (window.screen.width <= 768) { // 768px portrait
      this.smallScreen = true;
    }
  }

}
