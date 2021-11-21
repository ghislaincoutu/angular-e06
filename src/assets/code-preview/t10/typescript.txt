import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module02Service, Data84 } from '../module02.service';

@Component({
  selector: 'app-t10',
  templateUrl: './t10.component.html',
  styleUrls: ['./t10.component.scss']
})
export class T10Component implements OnInit {
  dataList84!: Data84[];

  constructor(
    public http: HttpClient,
    private Module02: Module02Service) { }

  private getHtmlFile(arg01: string) {
    console.log("log01: " + arg01);
    console.log("log02: " + this.http.get(arg01, { responseType: 'text' }));
    return this.http.get(arg01, { responseType: 'text' });
  }

  ngOnInit(): void {
    this.Module02.getData84().subscribe((arg01: Data84[]) => {
      arg01.forEach(
        (item: Data84) => (item['document84'] = this.getHtmlFile(item.htmlfile))
      );
      this.dataList84 = arg01;
      console.log("log03: " + arg01)
    });
  }

}
