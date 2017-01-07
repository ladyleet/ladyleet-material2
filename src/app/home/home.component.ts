import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="margin-75">
      <div>
        <img class="z-depth-1" src="/assets/ladyleet-main-2.jpg"/>
        <img src="/assets/ladyleet-main.jpg"/>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
