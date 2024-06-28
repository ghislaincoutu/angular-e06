import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-t03',
  templateUrl: './t03.component.html',
  styleUrls: ['./t03.component.scss']
})
export class T03Component implements OnInit {
  envTitle = environment.envTitle;
  envURL = environment.envURL;
  message23: any = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("Test de la fonctionnalité Angular Promise");
    console.log(this.envTitle);
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
        this.envURL + "/angular-e06t03/data18.json"
      )
      .toPromise();
  }

}
