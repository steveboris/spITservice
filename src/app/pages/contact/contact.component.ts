import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contatcs = [
    {
      icon: '../../../assets/img/location.png',
      title: 'Standort',
      subtitle: 'straße 2, 12222 Berlin'
    },
    {
      icon: '../../../assets/img/call.png',
      title: 'Phone:',
      subtitle: '+49 15xxx xxxxx'
    }
  ];

  topics = [
    'Web Entwicklung',
    'Apps Entwicklung',
    'Termin buchen',
    'Beratung',
    'Anderes'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
