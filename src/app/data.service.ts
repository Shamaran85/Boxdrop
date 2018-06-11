import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Dropbox } from 'dropbox';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  accessToken: any;
  items: any;
  public stream;
  apiKey = 'k1hh5fcfbbbrv74';
  redirectUri = 'http://localhost:4200/auth';
  url = `https://www.dropbox.com/1/oauth2/authorize?client_id=${this.apiKey}&redirect_uri=${this.redirectUri}&response_type=token`;


  imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tif', 'tiff'];


  constructor(public http: Http) {
    this.stream = new BehaviorSubject(this.items);
    this.accessToken = localStorage.getItem('token');
  }

  setToken(token) {
    this.accessToken = token;
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

      return Promise.all(this.items.map((item) => {
        const ePath = item.path_lower;
        const ext = ePath.substring(ePath.lastIndexOf('.') + 1, ePath.length);
        const typeCheck = this.imageTypes.indexOf(ext);

        if (typeCheck !== -1) {
          const token = this.accessToken;
          const dbx = new Dropbox({ accessToken: token });
          return dbx.filesGetThumbnail({ path: item.id })
            .then(function (thumb: any) {
              const thumbnail = window.URL.createObjectURL(thumb.fileBlob);
              item.thumbNail = thumbnail;
              return item;
            })
            .catch(function (error) {
              console.log('got error:', error);
            });
        } else {
          return Promise.resolve(item);
        }
      })).then((items) => {
        this.stream.next(items);
      });
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

}
