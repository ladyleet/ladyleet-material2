import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="site-margin-50">
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h3 class="center-align primary-color">
        About
       </h3>
      </div>
    </div>

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
