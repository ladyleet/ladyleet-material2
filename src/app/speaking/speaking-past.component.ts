import { Component, OnInit } from '@angular/core';
import { upcoming } from './upcoming.model';

@Component({
  selector: 'app-speaking-past',
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

      <div fxLayout="row" class="center-align">
        <div fxFlex="50">
          <h4><a routerLink="/speaking">Upcoming</a></h4>
        </div>
        <div fxFlex="50">
          <h4><a routerLink="/speaking/past">Past</a></h4>
        </div>
      </div>
      <div fxFlex="100" class="card-container">
        <md-card *ngFor='let event of completed' class="margin-10 width-100">
          <div>
            <h5><a href='{{event.confLink}}'>{{event.confName}}, {{event.confDate}}, {{event.confCity}}, {{event.confState}}</a></h5>
            <h5>{{event.confTalkTitle}}</h5>
            <p>{{event.confTalkBrief}}</p>
          </div>
      </md-card>
    </div>
  </div>
  `,
  styles: []
})
export class SpeakingPastComponent implements OnInit {
  upcoming = upcoming;

    get completed() {
      return this.upcoming.filter(x => x.confStatus ==='complete');
    }

    constructor() { }

    ngOnInit() {
    }

}
