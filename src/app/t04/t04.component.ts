import { Component, OnInit, AfterViewChecked, NgZone } from '@angular/core';

@Component({
  selector: 'app-t04',
  templateUrl: './t04.component.html',
  styleUrls: ['./t04.component.scss']
})
export class T04Component implements OnInit {
  constructor(private Zone18: NgZone) { }

  data81 = [
    { id: "id001" },
    { id: "id002" },
    { id: "id003" },
    { id: "id004" }
  ];

  displayHTML(value: string) {
    // Boucle sans fin neutralisée.
    this.Zone18.runOutsideAngular(() => {
      setTimeout(() => {
        console.log("Exécution d'une tâche supplémentaire.");
      }, 1000);
    });
    return value;
  }

  ngAfterViewChecked() {
    console.count("ngAfterViewChecked");
  }

  ngOnInit(): void {
  }

}
