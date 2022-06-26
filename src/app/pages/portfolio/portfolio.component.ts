import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  allowers: string[] = ['steve-boris', 'pascal-nansse']
  username: string = '';
  isSteve = false;

  steve = [
    {
      degree: 'Master',
      university: 'Technische Hochschule Brandenburg',
      date: '09/2021',
      location: 'Brandenburg'
    },
    {
      degree: 'Bachelor',
      university: 'Technische Hochschule Brandenburg',
      date: '02/2021',
      location: 'Brandenburg'
    }
  ];

  pascal = [
    {
      degree: 'Master',
      university: 'Technische Hochschule Brandenburg',
      date: '03/2022',
      location: 'Brandenburg'
    },
    {
      degree: 'Bachelor',
      university: 'Technische Hochschule Brandenburg',
      date: '10/2021',
      location: 'Brandenburg'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this page will only be displaying if the parameter includes steve or pascal. otherwise redirect to home
    this.activatedRoute.paramMap.subscribe(param => {
      this.username = `${param.get('user')}`;
      this.isSteve = this.username.includes('steve');
      if (!this.allowers.includes(this.username)) {
        this.route.navigate(['/home']);
      }
      this.username = this.getUserName();
    });
  }

  getUserName(): string {
    let username = this.username.split('-')[0].charAt(0).toUpperCase() + this.username.split('-')[0].slice(1);
    username += ' ' + this.username.split('-')[1].charAt(0).toUpperCase() + this.username.split('-')[1].slice(1);
    return username;
  }
}
