import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  serviceName: string | null = null;
  isSoftware: boolean = false;
  isWebsite: boolean = false;
  isConsulting: boolean = false;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedroute.paramMap.subscribe(params => {
      this.serviceName = params.get('name');
      this.checkServiceName();
    });
  }

  ngOnInit(): void {}

  checkServiceName() {
    // if there is no servicename than redirect to home
    if (this.serviceName == null) {
      this.router.navigate(['.']);
    }

    if (this.serviceName?.toLowerCase() == 'software') {
      this.isSoftware = true;
    } else if (this.serviceName?.toLowerCase() == 'website') {
      this.isWebsite = true;
    } else if (this.serviceName?.toLowerCase() == 'consulting') {
      this.isConsulting = true;
    } else {
      this.router.navigate(['.']);
    }
  }

  openService(url: string) {
    if (url == 'software') {
      this.isSoftware = true;
      this.isWebsite = false;
      this.isConsulting = false;
      this.router.navigate(['services/software']);
    } else if (url == 'website') {
      this.isWebsite = true;
      this.isSoftware = false;
      this.isConsulting = false;
      this.router.navigate(['services/website']);
    } else if (url == 'consulting') {
      this.isConsulting = true;
      this.isWebsite = false;
      this.isSoftware = false;
      this.router.navigate(['services/consulting']);
    } else {
      this.router.navigate(['.']);
    }
  }
}
