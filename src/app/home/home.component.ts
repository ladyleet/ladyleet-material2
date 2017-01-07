import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="margin-75">
    <md-card>
     <md-card-content>
       <div>
         <div fxLayout="column" fxLayout.xs="column" fxLayout.sm="column" fxFlex class="box" >
          <img class="responsive-img" src="/assets/ladyleet-main-2.jpg"/>
           <div fxFlex> I'm above on mobile, and to the left on larger devices.   </div>
           <div fxFlex> I'm below on mobile, and to the right on larger devices.  </div>
         </div>
       </div>
      </md-card-content>
   </md-card>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
