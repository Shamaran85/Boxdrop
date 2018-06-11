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
  starItems = [];
  imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tif', 'tiff'];

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit() {


    this.dropbox.stream.subscribe((items) => {
      this.items = items;
    });

    this.activeroute.url.subscribe((items) => {
      this.router.url === '/' ? this.dropbox.getData('') : this.dropbox.getData(this.router.url);
    });

    if (localStorage.getItem('staritems') !== null) {
      this.starItems = JSON.parse(localStorage.getItem('staritems'));
    }
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

  starItem(id) {
    const starId = id;
    const tmp = this.starItems.indexOf(starId);

    if (this.starItems.indexOf(starId) === -1) {
      this.starItems.push(starId);
      console.log('ID pushed: ', starId);
      this.saveToLocalStorage();
    } else {
      this.starItems.splice(this.starItems.indexOf(starId), 1);
      console.log('ID removed: ', starId);
      this.saveToLocalStorage();
    }
    console.log(this.starItems);
  }

  saveToLocalStorage() {
    localStorage.setItem('staritems', JSON.stringify(this.starItems));
  }


  // *ngIf="imageTypes.indexOf(item.path_lower.substring(item.path_lower.lastIndexOf('.') + 1, item.path_lower.length)) === -1"

  getThumbnail(filePath, fileId) {

    const id = fileId;
    const path = filePath;

    const token = this.dropbox.accessToken;
    const dbx = new Dropbox({ accessToken: token });
    dbx.filesGetThumbnail({ path: id })
      .then(function (data: any) {
        const blobUrl = window.URL.createObjectURL(data.fileBlob);
        const attributeId = document.getElementById(path);
        attributeId.setAttribute('src', blobUrl);
      })
      .catch(function (error) {
        console.log('got error:', error);
      });
  }

  checkFileType(filePath, fileId) {
    const id = fileId;
    const path = filePath;
    const ext = path.substring(path.lastIndexOf('.') + 1, path.length);
    const typeCheck = this.imageTypes.indexOf(ext);

    console.log(`Type: ${typeCheck} | Ext: ${ext} | Path: ${path}`);

    typeCheck !== -1 ? this.getThumbnail(path, id) : console.error('Not an image.');
  }



  // thumbs(id) {
  //   const token = this.dropbox.accessToken;
  //   const path = id;
  //   const dbx = new Dropbox({ accessToken: token });
  //   dbx.filesGetThumbnail({ path: path })
  //     .then(function (data: any) {
  //       console.log(data);
  //       const img = document.createElement('img');
  //       img.src = window.URL.createObjectURL(data.fileBlob);
  //       document.body.appendChild(img);
  //     })
  //     .catch(function (error) {
  //       console.log('got error:', error);

  //     });
  // }


}
