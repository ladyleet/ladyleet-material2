import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { MediaComponent }  from './media/media.component';
import { SpeakingComponent }  from './speaking/speaking.component';
import { SpeakingPastComponent }  from './speaking/speaking-past.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'media', component: MediaComponent },
  { path: 'speaking', component: SpeakingComponent },
  { path: 'speaking/past', component: SpeakingPastComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
