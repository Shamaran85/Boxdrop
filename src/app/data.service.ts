import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Dropbox } from 'dropbox';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  accessToken: any = 'PjVheRC4lNAAAAAAAAAAEeQoR7oz26-cQRI-5zpne2ZARERKVEjHU3f_Vq932ccC';
  items: any;
  public stream;
  apiKey = 'k1hh5fcfbbbrv74';
  redirectUri = 'http://localhost:4200';
  url = `https://www.dropbox.com/1/oauth2/authorize?client_id=${this.apiKey}&redirect_uri=${this.redirectUri}&response_type=token`;



  constructor(public http: Http) {
    this.stream = new BehaviorSubject(this.items);
  }

  getData(path?) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');
    const ob = this.http.post('https://api.dropboxapi.com/2-beta-2/files/list_folder',
      JSON.stringify({ path }),
      { headers: headers })
      .pipe(map(res => res.json()));
    ob.subscribe((data) => {
      this.items = data.entries;
      this.stream.next(this.items);
    });
    return ob;
  }


  // https://www.dropbox.com/developers/documentation/http/documentation#files-search
  searchFile(searchValue) {
    const headers = new Headers();

    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    const query = {
      'path': '',
      'query': searchValue,
      'start': 0,
      'max_results': 100,
      'mode': 'filename'
    };

    return this.http.post('https://api.dropboxapi.com/2/files/search', JSON.stringify(query), { headers: headers })
      .pipe(map(res => res.json()));
  }

  searchResult(result) {
    console.log('service result: ', result);
    return result;
  }


}
