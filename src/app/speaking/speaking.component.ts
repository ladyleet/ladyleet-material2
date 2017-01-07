import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  template: `
    <div class="margin-75">
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
