import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-t09',
    templateUrl: './t09.component.html',
    styleUrls: ['./t09.component.scss'],
    standalone: false
})
export class T09Component implements OnInit {

  data81 = [
    {
      id: "aide001",
      html33: "<p>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit. Fusce tempus, nibh quis maximus vulputate, arcu nunc ornare magna, sit amet volutpat quam tellus at magna.</p>",
      title33: "Titre 001"
    },
    {
      id: "aide002",
      html33: "<p>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Sed ultrices arcu</b> sit amet ultricies aliquam. Donec malesuada augue quis magna convallis, sed elementum diam bibendum.</p>",
      title33: "Titre 002"
    },
    {
      id: "aide003",
      html33: "<p>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Nullam tempus</b> elementum molestie. Nulla lacus arcu, placerat eu leo a, interdum tincidunt dolor.</p>",
      title33: "Titre 003"
    },
    {
      id: "aide004",
      html33: "<p>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Vivamus eu diam</b> tempus purus scelerisque sagittis nec et nisi. Maecenas et justo tristique, imperdiet nulla sit amet, vestibulum elit. Aenean rutrum diam sit amet sem lobortis, nec dignissim sem porttitor. Nam fringilla lacinia tincidunt. Etiam hendrerit dui purus, eget pellentesque nisl ultricies nec..</p>",
      title33: "Titre 004"
    },
  ]

  constructor(protected sanitizer89: DomSanitizer) { }

  public displayData(value18: string) {
    return this.sanitizer89.bypassSecurityTrustHtml(value18);
  }

  ngOnInit(): void {
  }

}
