import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dropbox } from 'dropbox';
import { DataService } from '../data.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs = [];

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) {
    this.activeroute.url.subscribe((items) => {
      const breadcrumbs = this.breadcrumbs;
      const tmp = this.router.url;
      const main = tmp.split('/');
      breadcrumbs.splice(0, breadcrumbs.length);
      breadcrumbs.push(main);

      for (const crumb of breadcrumbs) {
        console.log(crumb);
      }
    });
  }

  ngOnInit() { }

}
