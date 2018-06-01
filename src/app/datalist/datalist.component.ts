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

}
