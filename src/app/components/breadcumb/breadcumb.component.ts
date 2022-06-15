import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit {

  public parentUrl: string | null = null;
  public currentUrl: string = '';

  constructor(private activatedroute: ActivatedRoute) {
    this.getParams();
  }

  ngOnInit(): void {
  }

  getParams() {
    this.activatedroute.url.subscribe(paths => {
      if (paths.length > 1) {
        this.parentUrl = paths[0].path;
        this.currentUrl = paths[1].path;
      } else {
        this.currentUrl = `${paths[0].path}`;
      }
    });
    // change parent url name
    if (this.parentUrl === 'services') {
      this.parentUrl = 'Dienstleitungen';
    }
  }

  transformUrl(value: string | null): string {
    this.getParams();
    return value ? value?.charAt(0).toUpperCase() + value?.slice(1) : '';
  }

  transformCurrentUrl(value: string): string {
    var paths = value.split('-');
    return paths.length > 1 ? `${this.transformUrl(paths[0])} ${this.transformUrl(paths[1])}` : this.transformUrl(paths[0]);
  }
}
