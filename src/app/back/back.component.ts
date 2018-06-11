import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})

export class BackComponent implements OnInit {

  pathBack: any;

  constructor(private router: Router, private activeroute: ActivatedRoute) {

    this.activeroute.url.subscribe((items) => {
      const currentPath = this.router.url;
      const newPath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
      this.pathBack = newPath;
    });
  }

  ngOnInit() { }

}
