import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Data84 {
  id: string;
  htmlfile: string;
  document84?: any;
}

const data84: Data84[] = [
  {
    id: "aide001",
    htmlfile: "https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide001/include.html"
  },
  {
    id: "aide002",
    htmlfile: "https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide002/include.html"
  },
  {
    id: "aide003",
    htmlfile: "https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide003/include.html"
  },
  {
    id: "aide004",
    htmlfile: "https://172.17.0.1:2443/r002/angular-e06t01/fiches/aide004/include.html"
  }
];

@Injectable({
  providedIn: 'root'
})
export class Module02Service {

  constructor() { }

  getData84(): Observable<Data84[]> {
    return of(data84).pipe(delay(1000));
  }

}
