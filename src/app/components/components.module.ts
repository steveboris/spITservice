import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faStar, faVideoCamera, faVideo } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Footer2Component } from './footer2/footer2.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    Footer2Component,
    BreadcumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    BreadcumbComponent,
    FooterComponent,
    Footer2Component,
    HeaderComponent,
  ]
})
export class ComponentsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStar,
      faVideo,
      faVideoCamera,
      faFacebook,
      faLinkedin,
      faLinkedinIn,
      faInstagram
    );
  }
}
