import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})

export class BackComponent implements OnInit {

  constructor(private router: Router, private activeroute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    if (this.router.url !== '/') {
      return this.location.back();
    }
  }


}
