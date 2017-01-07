import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  template: `
    <div class="site-margin-50">
      <app-breadcrumb></app-breadcrumb>
      <div fxLayout="row">
        <div fxFlex.gt-sm="100" fxFlex="100">
         <h3 class="center-align primary-color margin-top-0">
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
