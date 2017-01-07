import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  template: `
  <div class="site-margin-50">
    <app-breadcrumb></app-breadcrumb>
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h3 class="center-align primary-color margin-top-0">
        Speaking Engagements
       </h3>
      </div>
    </div>

      <md-card>
       <md-card-content>
         <div>
            <img class="responsive-img" src="/assets/ladyleet-main-2.jpg"/>
          </div>
        </md-card-content>
      </md-card>
    </div>
  `,
  styles: []
})
export class SpeakingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
