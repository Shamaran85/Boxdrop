/*import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private af: AngularFire) { }

  items: FirebaseListObservable<any[]>;
  fileList: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.items = this.af.database.list('/favoriteItem');
    this.fileList = this.af.database.list('/items');
  }

  add(item) {
    this.fileList.push(item);
  }

  delete(item) {
    this.items.remove(item);
  }

}*/
