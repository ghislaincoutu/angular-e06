import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const data62 = [
  { city: "Montréal" },
  { city: "Québec" },
  { city: "Trois-Rivières" },
  { city: "Sherbrooke" },
  { city: "Laval" }
];

const data84 = [
  {
    id: "aide001",
    extfile73: "https://172.17.0.1:2443/angular-e06t01/fiches/aide001/include.html"
  },
  {
    id: "aide002",
    extfile73: "https://172.17.0.1:2443/angular-e06t01/fiches/aide001/include.html"
  },
  {
    id: "aide003",
    extfile73: "https://172.17.0.1:2443/angular-e06t01/fiches/aide001/include.html"
  },
  {
    id: "aide004",
    extfile73: "https://172.17.0.1:2443/angular-e06t01/fiches/aide001/include.html"
  }
];

@Injectable({
  providedIn: 'root'
})
export class Module01Service {

  constructor() { }

  getData62(): Observable<any[]> {
    return of(data62).pipe(delay(2000));
  }
  getData84(): Observable<any[]> {
    return of(data84).pipe(delay(2000));
  }

}
