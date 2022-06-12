import { Component, OnInit } from '@angular/core';

interface User {
  picture: string;
  name: string;
  job: string;
  description: string;
  portfolio: string;
  github: string;
  linkedIn: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public profiles:User[];
  public user1: User = {
    picture: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    name: 'Name',
    job: 'Job',
    description:
      'Invidunt lorem justo sanctus clita. Erat lorem labore ea, ' +
      'justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea ' + 
      'justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor',
    github: 'Follow me on Github',
    linkedIn: 'Follow me on LinkedIn',
    portfolio: 'Über mich'
  };

  public user2: User = {
    picture: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
    name: 'Name',
    job: 'Job',
    description:
      'Invidunt lorem justo sanctus clita. Erat lorem labore ea, ' +
      'justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea ' + 
      'justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor',
    github: 'Follow me on Github',
    linkedIn: 'Follow me on LinkedIn',
    portfolio: 'Über mich'
  };

  /**What we do */
  public cards = [
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Apps & Software Entwicklung',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: '#'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Webentwicklung',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: '#'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Consulting',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: '#'
    }
  ]

  /** Why us */
  public itemlist = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Dapibus ac facilisis in',
    'Cras justo odio',
    'Morbi leo risus'
  ]
  constructor() {
    this.profiles = []; 
  }

  ngOnInit(): void {
    this.profiles.push(this.user1);
    this.profiles.push(this.user2);
  }
}
