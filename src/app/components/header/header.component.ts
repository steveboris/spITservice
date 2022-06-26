import { Component, HostListener, OnInit } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hide: boolean = false;
  screenSize: number = 0;
  // each position correspond to each link. Help to know when to add the class "active"
  links = [false, false, false, false];

  constructor(private modalDialog: MatDialog) {
    this.screenSize = window.innerWidth;
  }

  ngOnInit(): void {
    this.hide = this.screenSize === 991;
    if (location.href.split('/').includes('services')) {
      this.setActiveClass(1);
    } else if (location.href.split('/').includes('projects')) {
      this.setActiveClass(2);
    } else if (location.href.split('/').includes('contacts')) {
      this.setActiveClass(3);
    } else if (location.href.split('/').includes('profile')) {
      this.links.filter(x => x).forEach((v, i) => this.links[i] = !v);
    } else {
      this.setActiveClass(0);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.hide = window.innerWidth === 991;
  }

  setActiveClass(position: number) {
    this.links.forEach((val, i) => this.links[i] = i === position);
  }

  startVideoCall(form: any) {
    this.modalDialog.open(form, { disableClose: true, autoFocus: true, panelClass: ['col-sm-12', 'col-md-4'] });
  }

  openJitsi() {
    const url = 'https://meet.jit.si/spITservice';
    window.open(url, '_blank');
  }
}
