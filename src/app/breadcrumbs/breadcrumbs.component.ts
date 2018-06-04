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

      this.breadcrumbs = [];
      let fullpath = '';


      let pathArray = this.router.url.split('/');
      if (this.router.url === '' || this.router.url === '/') {
        pathArray = [''];
      }


      for (const path of pathArray) {
        if (path !== '') {
          fullpath = fullpath + '/' + path;
        }

        const breadcrumb = {
          fullpath: fullpath,
          path: path
        };
        this.breadcrumbs.push(breadcrumb);
        // console.log('bc: ', this.breadcrumbs);
      }

      console.log('bc: ', this.breadcrumbs, this.router.url);

    });

  }

  ngOnInit() { }

}
