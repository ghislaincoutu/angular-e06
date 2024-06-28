import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-t08',
  templateUrl: './t08.component.html',
  styleUrls: ['./t08.component.scss']
})
export class T08Component implements OnInit {
  envTitle = environment.envTitle;
  envURL = environment.envURL;

  constructor(private sanitizer21: DomSanitizer) { }

  data81 = [
    {
      id: "aide001",
      iframe73: "<iframe src='" + this.envURL + "/angular-e06t01/fiches/aide001/include.html' id='aide001'></iframe>"
    },
    {
      id: "aide002",
      iframe73: "<iframe src='" + this.envURL + "/angular-e06t01/fiches/aide002/include.html' id='aide002'></iframe>"
    },
    {
      id: "aide003",
      iframe73: "<iframe src='" + this.envURL + "/angular-e06t01/fiches/aide003/include.html' id='aide003'></iframe>"
    },
    {
      id: "aide004",
      iframe73: "<iframe src='" + this.envURL + "/angular-e06t01/fiches/aide004/include.html' id='aide004'></iframe>"
    }
  ];

  displayHTML(file54: string) {
    return this.sanitizer21.bypassSecurityTrustHtml(file54);
  }

  ngOnInit(): void {
    console.log(this.envTitle);
  }

}
