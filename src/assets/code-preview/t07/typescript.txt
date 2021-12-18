import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-t07',
  templateUrl: './t07.component.html',
  styleUrls: ['./t07.component.scss']
})
export class T07Component implements OnInit {
  files38: any = '';
  htmlTemplate38: any = '';
  htmlData38: any = '';
  htmlString38: any = '';
  webServer38: string = 'https://172.17.0.1:2443/r002/angular-e06t01/fiches';

  constructor(
    public http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  data81 = [
    {
      id: "aide001",
      extfile: "/aide001/include.html"
    },
    {
      id: "aide002",
      extfile: "/aide002/include.html"
    },
    {
      id: "aide003",
      extfile: "/aide003/include.html"
    },
    {
      id: "aide004",
      extfile: "/aide004/include.html"
    }
  ];

  public displayHTML(file54: string) {
    switch (file54) {
      case 'aide001': this.htmlTemplate38 = this.webServer38 + this.data81[0].extfile; break;
      case 'aide002': this.htmlTemplate38 = this.webServer38 + this.data81[1].extfile; break;
      case 'aide003': this.htmlTemplate38 = this.webServer38 + this.data81[2].extfile; break;
      case 'aide004': this.htmlTemplate38 = this.webServer38 + this.data81[3].extfile; break;
    }
    this.http.get(this.htmlTemplate38, { responseType: 'text' }).subscribe(res => {
      this.htmlString38 = res;
      this.htmlData38 = this.sanitizer.bypassSecurityTrustHtml(this.htmlString38);
    })
  }

  ngOnInit(): void {
  }

}
