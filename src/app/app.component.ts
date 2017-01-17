import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-nav-bar>
    <router-outlet></router-outlet>
  </app-nav-bar>
  <app-konami></app-konami>
  `
})
export class AppComponent {
  title = 'app works!';
}
