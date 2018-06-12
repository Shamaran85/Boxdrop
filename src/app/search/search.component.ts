import { Component, OnInit } from '@angular/core';
import { Dropbox } from 'dropbox';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchResults = null;

  constructor(public dropbox: DataService) { }

  ngOnInit() {
  }

  search(event) {
    event.preventDefault();
    this.searchResults = [];
    const searchValue = (<HTMLInputElement>document.getElementById('search-token')).value;
    if (searchValue !== '') {
      this.dropbox.searchFile(searchValue).subscribe((data: any) => {
        for (const i of data.matches) {
          this.searchResults.push(i.metadata);
        }
      });
    } else {
      console.log('Dont leave blank');
    }
  }

  clearSearchInput() {
    (<HTMLInputElement>document.getElementById('search-token')).value = '';
    this.searchResults = null;
  }

  saveFile(id, name) {
    const token = this.dropbox.accessToken;
    const path = id;
    const dbx = new Dropbox({ accessToken: token });
    dbx.filesDownload({ path: path })
      .then(function (data: any) {
        const blobURL = URL.createObjectURL((<any>data).fileBlob);
        const fileURL = document.createElement('a');
        fileURL.setAttribute('href', blobURL);
        fileURL.setAttribute('download', name);
        fileURL.click();
      });
  }

}
