import { Component, HostListener, OnInit } from '@angular/core';
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

  constructor() {
    this.screenSize = window.innerWidth;
  }

  ngOnInit(): void {
    this.hide = this.screenSize === 991;
    if(location.href.split('/').includes('services')) {
      this.setActiveClass(1);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.hide = window.innerWidth === 991;
  }

  setActiveClass(position: number) {
    this.links.forEach((val, i) => this.links[i] = i === position);
  }
}
