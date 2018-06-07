import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.url.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.indexOf('&') !== -1) {
        const params = currentUrl.split('=');
        const authTokenParams = params[1].split('&');
        const authToken = authTokenParams[0];
        localStorage.setItem('token', authToken);
        console.log(authToken, currentUrl);
        this.dropbox.setToken(authToken);
        this.dropbox.getData('');
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  getFiles() {
    const authToken = localStorage.getItem('token');

    const options = {
      'headers': new HttpHeaders({
        'Authorization': authToken
      })
    };
  }
}
