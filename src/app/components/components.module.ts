import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    Footer2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    Footer2Component,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
