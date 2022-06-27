import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      img: 'assets/img/web-link.png',
      title: 'Pawlo Masoso e.V',
      text: 'PAWLO-Masoso e.V. ist eine panafrikanische Frauenorganisation.'
            + 'Ziel des Projekts ist, Kinder, Jungendliche und junge Erwachsene zu begleiten um ihnen eine erfolgreiche Schulzeit, '
            + 'einen gelungene Einstieg in das Berufsleben, eine erfolgreiche Ausbildung bzw. Studium zu ermöglichen...',
      link: 'https://pawlo.org',
      tech: 'PHP - Wordpress'
    },
    {
      img: 'assets/img/sport-car.png',
      title: 'Car Rental',
      text: 'Car rental ist eine Webanwendung für den Online-Verkauf von Fahrzeugen. '
            + 'Kunden können die Suche nach Datum oder Marke filtern und Online-Reservierungen vornehmen. '
            + 'Das Projekt wurde im Rahmen meines Studiums entwickelt und bassieren aud NodeJs.',
      link: 'https://github.com/steveboris/carrentJs',
      tech: 'NodeJs'
    },
    {
      img: 'assets/img/web-link.png',
      title: 'ABC INTER',
      text: 'ABCINTER  ist ein Startup, das sich auf die Verwaltung von Paketsendungen spezialisiert hat.'
            + 'Die Webanwendung bietet Managern die Möglichkeit, relevante Informationen zu speichern und Nutzern die Möglichkeit, '
            + 'ihre Sendungen online über die Sendungsnummer nachzuverfolgen.',
      link: 'https://abcinter-group.com',
      tech: 'PHP - Wordpress'
    },
    {
      img: 'assets/img/icecream.png',
      title: 'Ice Cream',
      text: 'Das Projekt stammt aus dem Beispiel von Martin Fowler. Die Aufgabe besteht dahin '
            + 'eine Benutzerüberfläche zu erstellen, die zur Berechnung der Eiscreme-Partikel in der Atmosphäre dienen soll.',
      link: 'https://github.com/steveboris/icecream',
      tech: 'C#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
