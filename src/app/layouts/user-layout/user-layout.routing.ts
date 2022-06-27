import { Routes } from '@angular/router';

import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';

export const UserLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services/:name', component: ServicesComponent },
  { path: 'profile/:user', component: PortfolioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: ContactComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
