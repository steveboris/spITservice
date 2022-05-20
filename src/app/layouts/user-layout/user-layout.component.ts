import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css'],
})
export class UserLayoutComponent implements OnInit {
  isHomepage: boolean;

  constructor(private router: Router) {
    // check whether it is the homepage or not.
    // Iff it is the homepage, the footer will be displayed otherwise the footer2
    this.isHomepage = this.router.url.includes('home');
  }

  ngOnInit(): void {}
}
