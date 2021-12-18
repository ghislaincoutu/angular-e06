import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-t08',
  templateUrl: './t08.component.html',
  styleUrls: ['./t08.component.scss']
})
export class T08Component implements OnInit {

  constructor(private sanitizer21: DomSanitizer) { }

  data81 = [
    {
      id: "aide001",
      iframe73: "<iframe src='https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide001/include.html' id='aide001'></iframe>"
    },
    {
      id: "aide002",
      iframe73: "<iframe src='https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide002/include.html' id='aide002'></iframe>"
    },
    {
      id: "aide003",
      iframe73: "<iframe src='https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide003/include.html' id='aide003'></iframe>"
    },
    {
      id: "aide004",
      iframe73: "<iframe src='https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide004/include.html' id='aide004'></iframe>"
    }
  ];

  displayHTML(file54: string) {
    return this.sanitizer21.bypassSecurityTrustHtml(file54);
  }

  ngOnInit(): void {
  }

}
