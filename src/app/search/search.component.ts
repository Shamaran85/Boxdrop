import { Component, OnInit } from '@angular/core';
import { Dropbox } from 'dropbox';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public dropbox: DataService) { }

  ngOnInit() {
  }


  // https://www.dropbox.com/developers/documentation/http/documentation#files-search
  search(event) {
    const searchResults = [];
    event.preventDefault();
    const searchValue = (<HTMLInputElement>document.getElementById('search-token')).value;
    if (searchValue !== '') {
      this.dropbox.searchFile(searchValue).subscribe((data: any) => {
        // console.log(data.matches);
        for (const i of data.matches) {
          searchResults.push(i.metadata);
        }
        console.log('Search: ', searchResults);
        this.dropbox.searchResult(searchResults);
      });
    } else {
      console.log('Dont leave blank');
    }
  }

}
