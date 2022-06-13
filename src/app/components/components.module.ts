import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
    FontAwesomeModule
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
      faFacebook,
      faLinkedin,
      faLinkedinIn,
      faInstagram
    );
  }
}
