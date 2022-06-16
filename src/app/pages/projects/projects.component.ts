import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      img: '../../../assets/img/web-link.png',
      title: 'Pawlo Masoso e.V',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
            + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      link: 'https://pawlo.org',
      tech: 'PHP - Wordpress'
    },
    {
      img: '../../../assets/img/sport-car.png',
      title: 'Car Rental',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
            + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
            + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      link: 'https://github.com/steveboris/carrentJs',
      tech: 'NodeJs'
    },
    {
      img: '../../../assets/img/web-link.png',
      title: 'ABC INTER',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
            + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      link: 'https://abcinter-group.com',
      tech: 'PHP - Wordpress'
    },
    {
      img: '../../../assets/img/icecream.png',
      title: 'Ice Cream',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
            + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      link: 'https://github.com/steveboris/icecream',
      tech: 'C#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
