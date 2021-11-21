import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-t06',
  templateUrl: './t06.component.html',
  styleUrls: ['./t06.component.scss']
})
export class T06Component implements OnInit {
  htmlTemplate38: any = '';
  htmlData38: any = '';
  htmlString38: any = '';
  webServer38: string = 'https://172.17.0.1:2443/angular-e06t01/fiches';

  constructor(
    public http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  public displayHTML(file54: string) {
    switch (file54) {
      case 'aide001': this.htmlTemplate38 = this.webServer38 + '/aide001/include.html'; break;
      case 'aide002': this.htmlTemplate38 = this.webServer38 + '/aide002/include.html'; break;
      case 'aide003': this.htmlTemplate38 = this.webServer38 + '/aide003/include.html'; break;
      case 'aide004': this.htmlTemplate38 = this.webServer38 + '/aide004/include.html'; break;
    }
    this.http.get(this.htmlTemplate38, { responseType: 'text' }).subscribe(res => {
      this.htmlString38 = res;
      this.htmlData38 = this.sanitizer.bypassSecurityTrustHtml(this.htmlString38);
    })
  }

  ngOnInit(): void {
  }

}
