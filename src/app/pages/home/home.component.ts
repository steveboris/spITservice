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
    picture: '../../../assets/avatar/steve.png',
    name: 'STEVE BORIS',
    job: 'CO-FOUNDER',
    description:
      'Entwickler mit Kenntnissen in Webanwendungen, Anwendungsentwicklung und Systemverwaltung. ' +
      'Erfahrung mit allen Phasen des Entwicklungszyklus für dynamische Webprojekte.',
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
    job: 'CO-FOUNDER',
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
      title: 'Softwareentwicklung',
      text: 'Wir entwickeln qualitativ hochwertige Anwendungen, die den neuen Technologien entsprechen.',
      link: 'services/software'
    },
    {
      img: '../../../assets/img/web-design.png',
      title: 'Webentwicklung',
      text: 'Wir haben uns gute Kenntnisse über die Erstellung von Websites angeeignet.',
      link: 'services/website'
    },
    {
      img: '../../../assets/img/computer.png',
      title: 'IT Sicherheit',
      text: 'Die Sicherung von Informationen ist ein ernst zu nehmender Aspekt.',
      link: '#'
    },
    {
      img: '../../../assets/img/video-call.png',
      title: 'Consulting',
      text: 'Wenn Sie Rat brauchen, um Ihre IT-Infrastruktur zu erstellen, sind wir für Sie da.',
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
