import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faUserCircle, faStar, faPlay, faMessage } from '@fortawesome/free-solid-svg-icons';
import {
  faCheckCircle as farCheckCircle
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faFacebook,
  faFacebookMessenger,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { ComponentsModule } from 'src/app/components/components.module';

import { UserLayoutRoutes } from './user-layout.routing';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
})
export class UserLayoutModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCheckCircle,
      farCheckCircle,
      faUserCircle,
      faStar,
      faGithub,
      faLinkedin,
      faLinkedinIn,
      faPlay,
      faMessage,
      faFacebook,
      faFacebookMessenger,
      faTwitter
    );
  }
}
