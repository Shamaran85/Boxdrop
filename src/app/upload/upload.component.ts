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

  constructor(public dropbox: DataService, private router: Router , public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  uploadFile() {
    const accessToken = this.dropbox.accessToken;
    const dbx = new Dropbox({ accessToken: accessToken });
    const fileInput = (<HTMLInputElement>document.getElementById('file-upload'));
    const file = fileInput.files[0];
    const filePath = this.router.url !== '' ? this.router.url + file.name : this.router.url + '/' + file.name;
    dbx.filesUpload({ path: filePath, contents: file })
      .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.error(error);
      });
    return false;
  }



}
