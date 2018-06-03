import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dropbox } from 'dropbox';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  items = [];

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.dropbox.stream.subscribe((items) => {
      console.log('main items: ', items);
      this.items = items;
    });

    this.activeroute.url.subscribe((items) => {
      this.router.url === '/' ? this.dropbox.getData('') : this.dropbox.getData(this.router.url);
    });
  }

  formatFileSize(a, b) {
    if (1024 >= a) { return '1 KB'; } const c = 1024, d = b || 2,
      e = ['Bytes', 'KB', 'MB', 'GB'],
      f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
  }

  formatDateTime(date) {
    const newDate = new Date(date);
    const displayDate = newDate.toISOString().slice(0, 19).replace('T', ' ');
    return displayDate;
  }

}
