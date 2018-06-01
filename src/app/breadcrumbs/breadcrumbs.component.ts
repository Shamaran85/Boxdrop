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

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    console.log('bcrum: ', this.router.url);
  }



}
