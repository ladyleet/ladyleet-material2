import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <h5 style="breadcrumb-margin"><a routerLink="/home">< Home</a></h5>
  `,
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
