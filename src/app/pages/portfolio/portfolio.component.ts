import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  allowers: string[] = ['steve-boris', 'pascal-nansse']
  user: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    // this page will only be displaying if the parameter includes steve or pascal. otherwise redirect to home
    this.activatedRoute.paramMap.subscribe(param => {
      this.user = `${param.get('user')}`;

      if (!this.allowers.includes(this.user)) {
        this.route.navigate(['/home']);
      }
    });
  }

}
