import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <md-sidenav-container fullscreen>
    <md-sidenav #sidenav mode="side" class="app-sidenav">
      <md-toolbar color="accent">
        <span><button md-button routerLink="/about">ABOUT</button></span>
        <md-toolbar-row>
          <button md-button routerLink="/speaking">SPEAKING</button>
        </md-toolbar-row>
        <md-toolbar-row>
          <button md-button><a class="white" href="http://medium.com/ladyleet/@latest" target="_blank">BLOG</a></button>
        </md-toolbar-row>
        <md-toolbar-row>
          <a class="white" href="http://twitter.com/ladyleet" target="_blank"><i class="fa fa-twitter nav-bar-padding"></i></a>
          <a class="white" href="http://github.com/ladyleet" target="_blank"><i class="fa fa-github nav-bar-padding"></i></a>
        </md-toolbar-row>
      </md-toolbar>
    </md-sidenav>

  <md-toolbar color="primary">
    <button md-button (click)="sidenav.toggle()">
      <md-icon class="material-icons menu">menu</md-icon>
    </button>
    <a routerLink="/home"><img src="/assets/tracy-80x80.jpg" class="logo-styling z-depth-3"></a>
    <span class="nav-bar-spacing"></span>
    <a class="white" href="http://twitter.com/ladyleet" target="_blank"><i class="fa fa-twitter nav-bar-padding"></i></a>
    <a class="white" href="http://github.com/ladyleet" target="_blank"><i class="fa fa-github nav-bar-padding"></i></a>
  </md-toolbar>
  <ng-content></ng-content>
</md-sidenav-container>
  `,
  styles: [`
    .nav-bar-spacing {
      flex: 1 1 auto;
    }
    .nav-bar-padding {
      padding: 0 14px;
    }
    .logo-styling {
      height: 80px;
      width: 80px;
      border-radius: 40px;
      margin: 10px;
      margin-top: 50px;
    }
    .white {
      color: white !important;
    }
    md-sidenav {
      width: 200px;
    }
  `]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
