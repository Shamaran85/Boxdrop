import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})

export class BackComponent {

  pathArray = [];

  constructor(private router: Router, private activeroute: ActivatedRoute) {
    const pathArray = this.router.url.split('/');
    pathArray.pop();
  }

  // goBack() {
  //   if (this.router.url !== '/') {
  //     return window.history.back();
  //   }
  // }


}
