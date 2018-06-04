import { Component, OnInit } from '@angular/core';
import { Dropbox } from 'dropbox';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  login() {
    window.location.href = this.dataService.url;
  }
}
