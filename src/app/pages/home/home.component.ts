import { Component, OnInit } from '@angular/core';

interface User {
  picture: string;
  name: string;
  job: string;
  description: string;
  portfolio: {
    text: string,
    link: string
  };
  github: {
    text: string,
    link: string
  };
  linkedIn: {
    text: string,
    link: string
  };
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public profiles:User[];

  public user1: User = {
    picture: '../../../assets/img/user.png',
    name: 'STEVE TITINANG',
    job: 'CEO & FOUNDER',
    description:
      'Invidunt lorem justo sanctus clita. Erat lorem labore ea, ' +
      'justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea ' +
      'justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor',
      github: {
        text: 'Github',
        link: 'https://github.com/steveboris'
      },
      linkedIn: {
        text: 'LinkedIn',
        link: 'https://linkedin.com'
      },
      portfolio:{
        text: 'Über mich',
        link: '/profile/steve-boris'
      }
  };

  public user2: User = {
    picture: '../../../assets/img/user.png',
    name: 'PASCAL NANSSE',
    job: 'CEO & FOUNDER',
    description:
      'Ich bin IT Berater (Hardware, Software) und helfen' +
      'ihnen auch bei der Digitalisierung und Automatisierung von Geschäftsprozessen.',
    github: {
      text: 'Github',
      link: 'https://github.com/pascalnansse'
    },
    linkedIn: {
      text: 'LinkedIn',
      link: 'https://linkedin.com'
    },
    portfolio:{
      text: 'Über mich',
      link: '/profile/pascal-nansse'
    }
  };

  /**What we do */
  public cards = [
    {
      img: '../../../assets/img/development.png',
      title: 'Apps & Software Entwicklung',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: 'services/software'
    },
    {
      img: '../../../assets/img/web-design.png',
      title: 'Webentwicklung',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: 'services/website'
    },
    {
      img: '../../../assets/img/computer.png',
      title: 'IT-Sicherheit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: '#'
    },
    {
      img: '../../../assets/img/video-call.png',
      title: 'Consulting',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: 'services/consulting'
    }
  ]

  //feedback
  feedbacks = [
    {
      name: "Robert Kanga",
      text: 'Professioneller service von Anfang bis zum Ende und hoher Qualität. Dankee nochmals S&P IT-Service',
      stern: 4
    },
    {
      name: "Robert Kanga",
      text: 'Professioneller service von Anfang bis zum Ende und hoher Qualität. Dankee nochmals S&P IT-Service',
      stern: 3
    },
    {
      name: "Robert Kanga",
      text: 'Professioneller service von Anfang bis zum Ende und hoher Qualität. Dankee nochmals S&P IT-Service',
      stern: 5
    },
    /*{
      name: "Robert Kanga",
      text: 'Professioneller service von Anfang bis zum Ende und hoher Qualität. Dankee nochmals S&P IT-Service,' +
            'Professioneller service von Anfang bis zum Ende und hoher Qualität. Dankee nochmals S&P IT-Service'
    }*/
  ];

  constructor() {
    this.profiles = [];
  }

  ngOnInit(): void {
    this.profiles.push(this.user1);
    this.profiles.push(this.user2);
  }

  navigateToService(url: string) {
    location.href = url;
  }
}
