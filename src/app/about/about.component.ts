import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="site-margin-50">
    <app-breadcrumb></app-breadcrumb>
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h3 class="center-align primary-color margin-top-0">
        About
       </h3>
      </div>
    </div>
    <div fxLayout="row">
      <md-card class="responsive-img">
       <md-card-content>
         <div fxFlex.gt-sm="100" fxFlex="100">
          <img class="responsive-img" src="/assets/ladyleet-main.jpg"/>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h4 class="center-align primary-color">
        Contact Me
       </h4>
       <h5 class="center-align">
        My Company: <a href="http://thisdot.co">This Dot</a> | Email: <a href="mailto: tracy@thisdot.co" target="_blank">tracy@thisdot.co</a> | Twitter: <a href="http://twitter.com/ladyleet" target="_blank">@ladyleet</a> | Github: <a href="http://twitter.com/ladyleet" target="_blank">ladyleet</a>
       </h5>
       <h5 class="center-align">
        Or catch me cooking at <a href="http://foodcss.com">FoodCSS</a>.
       </h5>
      </div>
    </div>
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h4 class="center-align primary-color">
        Find me at a local conference!
       </h4>
      </div>
    </div>
    <div>
      <app-social-pics-card></app-social-pics-card>
    </div>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
