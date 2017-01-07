import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="site-margin-50">
    <div fxLayout="row">
      <div fxFlex.gt-sm="100" fxFlex="100">
       <h3 class="center-align primary-color">
        Welcome. Huanying. Wilkommen. Bienvenue.
       </h3>
      </div>
    </div>

    <div fxLayout="row" fxLayout.xs="column" fxLayout.s="column" fxLayout.m="column">
      <div fxFlex.gt-sm="50" fxFlex="50">
        <md-card>
         <md-card-content>
           <div>
              <img class="responsive-img" src="/assets/hacking.jpg"/>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div fxFlex.gt-sm="5" fxFlex="5">
      </div>

      <div fxFlex.gt-sm="45" fxFlex="45">
       <div class="center-align">
         <h5 class="accent-color">
          Speaker. Serial Entrepreneur. Podcaster. Writer.
         </h5>
         <div class="font-size-14">
            <p>
              Tracy is a Google Developer Expert, JavaScript developer, and serial entrepreneur. She is the Co-Founder of <a href="http://thisdot.co/labs" target="_blank">This Dot Labs</a>, a framework agnostic agency helping mentor teams build ambitious apps.
            </p>
            <p>
              After the acquisition of her last startup, Dishcrawl, where she served as Founder &amp; CEO, she discovered JavaScript and spends her time exploring code and building the JS community.
            </p>
            <p>
              Tracy is also the creator of <a href="http://thisdot.co/javascript" target="_blank">This.JavaScript</a>, <a href="http://ngcruise.com" target="_blank">ng-cruise</a>, <a href="http://modern-web.org" target="_blank">Modern.Web podcast</a>, <a href="http://rxworkshop.com" target="_blank">RxWorkshop</a>, <a href="http://contributordays.com" target="_blank">Contributor Days</a>, and <a href="http://venturehacked.com" target="_blank">Venture Hacked</a>.
            </p>
            <p>
              She has been featured in multiple news and media publications including Fox News, ABC, Huffington Post, NBC, Vice, Cooking Channel, Food Network, KQED, and more.
            </p>
            <p>
              You can find her on Twitter <a href="http://twitter.com/ladyleet" target="_blank">@ladyleet</a>.
            </p>
          </div>
        </div>
      </div>
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
