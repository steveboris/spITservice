import { Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';

export const UserLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services/:name', component: ServicesComponent }
];
