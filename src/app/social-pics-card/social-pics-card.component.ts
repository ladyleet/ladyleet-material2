import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-pics-card',
  template: `
  <div fxLayoutAlign="center center" class="card-container">
    <md-card *ngFor="let picture of pictures" class="margin-10">
      <img class="responsive-img" md-card-image src="/assets/pictures/ladyleet-{{picture.image}}.jpg"/>
    </md-card>
  </div>
  `,
  styles: []
})
export class SocialPicsCardComponent implements OnInit {

  pictures: Object=[] = [{
    image: "001"
  },
  {
    image: "002"
  },
  {
    image: "003"
  },
  {
    image: "004"
  },
  {
    image: "005"
  },
  {
    image: "006"
  },
  {
    image: "007"
  },
  {
    image: "008"
  },
  {
    image: "009"
  },
  {
    image: "010"
  },
  {
    image: "011"
  },
  {
    image: "012"
  },
  {
    image: "013"
  },
  {
    image: "014"
  },
  {
    image: "015"
  },
  {
    image: "016"
  },
  {
    image: "017"
  },
  {
    image: "018"
  },
  {
    image: "019"
  },
  {
    image: "020"
  },
  {
    image: "021"
  },
  {
    image: "022"
  },
  {
    image: "023"
  },
  {
    image: "024"
  },
  {
    image: "025"
  },
  {
    image: "026"
  },
  {
    image: "027"
  },
  {
    image: "028"
  },
  {
    image: "029"
  },
  {
    image: "030"
  },
  {
    image: "031"
  },
  {
    image: "032"
  },
  {
    image: "033"
  },
  {
    image: "034"
  },
  {
    image: "035"
  },
  {
    image: "036"
  },
  {
    image: "037"
  },
  {
    image: "038"
  },
  {
    image: "039"
  },
  {
    image: "040"
  },
  {
    image: "041"
  },
  {
    image: "042"
  },
  {
    image: "043"
  },
  {
    image: "044"
  },
  {
    image: "045"
  },
  {
    image: "046"
  },
  {
    image: "047"
  }]
  constructor() { }

  ngOnInit() {
  }

}
