import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="margin-75">
      <div fxLayout="row">

        <div fxFlex.gt-sm="75" fxFlex="75">
         <div>
            LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM
          </div>
        </div>

        <div fxFlex.gt-sm="25" fxFlex="25">
          <md-card>
           <md-card-content>
             <div>
                <img class="responsive-img" src="/assets/ladyleet-welcome.png"/>
              </div>
            </md-card-content>
          </md-card>
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
