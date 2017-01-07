import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  template: `
    <div class="site-margin-50">
      <div fxLayout="row">
        <div fxFlex.gt-sm="100" fxFlex="100">
         <h3 class="center-align primary-color">
          Media
         </h3>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
