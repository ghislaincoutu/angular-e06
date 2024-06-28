import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Model21 {
  temp21!: number;
  feels_like21!: number;
  temp_min21!: number;
  temp_max21!: number;
}
export class Model22 {
  records22!: any;
}

@Component({
  selector: 'app-t15',
  templateUrl: './t15.component.html',
  styleUrls: ['./t15.component.scss']
})
export class T15Component implements OnInit {
  processData21: any = '';
  processData22a: any = '';
  processData22b: any = '';

  constructor(private http50: HttpClient) { }

  ngOnInit(): void {
    this.getData21().subscribe((value21: Model21) => {
      this.processData21 = value21;
      console.log(this.processData21);
    });
    this.getData22().subscribe((value22: Model22) => {
      this.processData22a = value22;
      this.processData22b = value22.records22;
      console.log(this.processData22a);
      console.log(this.processData22b);
    });
  }

  getData21(): Observable<Model21> {
    const jsonFile = "assets/data21.json";
    return this.http50.get(jsonFile).pipe(map((response21: any) => ({
      temp21: response21.main.temp,
      temp_min21: response21.main.temp_min,
      temp_max21: response21.main.temp_max,
      feels_like21: response21.main.feels_like
    })))
  }
  getData22(): Observable<Model22> {
    const jsonFile = "assets/data22.json";
    return this.http50.get(jsonFile).pipe(map((response22: any) => ({
      records22: response22.records
    })))
  }

}
