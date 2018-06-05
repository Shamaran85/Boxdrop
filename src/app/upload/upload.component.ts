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

  constructor(public dropbox: DataService, private router: Router, private activeroute: ActivatedRoute) {}

  ngOnInit() {
  }

  uploadYourFile() {
    // alert('Upload!!!');
    //console.log(this.router.url);
var ACCESS_TOKEN = 'PjVheRC4lNAAAAAAAAAAEeQoR7oz26-cQRI-5zpne2ZARERKVEjHU3f_Vq932ccC';
var dbx = new Dropbox({ accessToken: ACCESS_TOKEN});
var fileInput = (<HTMLInputElement> document.getElementById('file-upload'));
var file = fileInput.files[0];
console.log(file, ACCESS_TOKEN);
const filePath = this.router.url + '/' + file.name;
console.log(filePath);
dbx.filesUpload({path: filePath, contents: file})
  .then(function(response) {
    //var results = document.getElementById('results');
    //results.appendChild(document.createTextNode('File uploaded!'));
    console.log(response);
    location.reload();
  })
  .catch(function(error) {
    console.error(error);
  });
return false;
  }



}
