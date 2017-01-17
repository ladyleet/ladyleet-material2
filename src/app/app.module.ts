import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { SpeakingPastComponent } from './speaking/speaking-past.component';
import { MediaComponent } from './media/media.component';
import { AssetsComponent } from './speaking/assets/assets.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SocialPicsCardComponent } from './social-pics-card/social-pics-card.component';
import { KonamiComponent } from './konami/konami.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SpeakingComponent,
    SpeakingPastComponent,
    MediaComponent,
    AssetsComponent,
    HomeComponent,
    BreadcrumbComponent,
    SocialPicsCardComponent,
    KonamiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    FlexLayoutModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
