import { Component, OnInit } from '@angular/core';

const data30 = {
  "comments": [{
    "title": "Titre du document JSON",
    "author": "Ghislain Coutu",
    "date": "Version du 2021-12-17"
  }],
  "records": [
    {
      "id": 11,
      "name": "Montréal"
    },
    {
      "id": 12,
      "name": "Québec"
    },
    {
      "id": 13,
      "name": "Trois-Rivières"
    }
  ]
};

@Component({
    selector: 'app-t14',
    templateUrl: './t14.component.html',
    styleUrls: ['./t14.component.scss'],
    standalone: false
})
export class T14Component implements OnInit {
  test21:any = '';
  test22:any = '';
  test23:any = '';

  constructor() { }

  ngOnInit(): void {
    var test01 = data30;
    console.log(test01);
    var test02 = data30.records;
    console.log(test02);
    var test03 = data30.records.find(item => item.id === 12);
    console.log(test03);

    this.test21 = data30;
    this.test22 = data30.records;
    this.test23 = data30.records.find(item => item.id === 12);
  }

}
