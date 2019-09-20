import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-fever';
  menu = false;

  dateObj = Date.now();

  onRouteActivate() {
    this.menu = false;
    window.scroll(0, window.innerHeight);
  }

  menuShowToggle() {
    this.menu = !this.menu;
    console.log(this.menu);
  }

  scrollBelowATF() {
    window.scroll(0, window.innerHeight);
  }

}

