import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-t02',
    templateUrl: './t02.component.html',
    styleUrls: ['./t02.component.scss'],
    standalone: false
})
export class T02Component implements OnInit {

  constructor() { }

  data84 = [
    {
      id: "aide001",
      extfile73: "assets/fiches/aide001/include.html"
    },
    {
      id: "aide002",
      extfile73: "assets/fiches/aide002/include.html"
    },
    {
      id: "aide003",
      extfile73: "assets/fiches/aide003/include.html"
    },
    {
      id: "aide004",
      extfile73: "assets/fiches/aide004/include.html"
    }
  ];

  ngOnInit(): void {
  }

}
