import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="margin-75">
      <md-card>
       <md-card-content>
         <div>
          <img class="responsive-img" src="/assets/ladyleet-main.jpg"/>
          </div>
        </md-card-content>
      </md-card>
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
