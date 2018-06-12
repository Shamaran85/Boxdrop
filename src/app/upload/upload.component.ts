import { Component, OnInit } from '@angular/core';
import { Dropbox } from 'dropbox';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(public dropbox: DataService, private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  uploadFile() {
    const accessToken = this.dropbox.accessToken;
    const dbx = new Dropbox({ accessToken: accessToken });
    const fileInput = (<HTMLInputElement>document.getElementById('file-upload'));
    const file = fileInput.files[0];
    const tmpPath = this.router.url + '/' + file.name;
    const filePath = tmpPath.replace('//', '/');
    dbx.filesUpload({ path: filePath, contents: file })
      .then(function (response) {
        console.log('Upload Success!');
      })
      .catch(function (error) {
        console.error(error);
      });
    return false;
  }



}
