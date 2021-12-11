import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-t03',
  templateUrl: './t03.component.html',
  styleUrls: ['./t03.component.scss']
})
export class T03Component implements OnInit {
  message23: any = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("Test de la fonctionnalité Angular Promise");
    this.fetchDataAsPromise()
      .then((data) => {
        this.message23 = "Promise acepted with " + JSON.stringify(data);
      })
      .catch((error) => {
        this.message23 = "Promise rejected with " + JSON.stringify(error);
      });
  }
  fetchDataAsPromise() {
    return this.httpClient
      .get(
        "https://172.17.0.1:2443/r002/angular-e06t03/data18.json"
      )
      .toPromise();
  }

}
