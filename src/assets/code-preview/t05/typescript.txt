import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-t05',
  templateUrl: './t05.component.html',
  styleUrls: ['./t05.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class T05Component implements OnInit {

  constructor() { }

  data81 = [
    { id: "id001" },
    { id: "id002" },
    { id: "id003" },
    { id: "id004" }
  ];

  displayHTML(value: string) {
    // Boucle sans fin neutralisée.
    setTimeout(() => {
      console.log("Exécution d'une tâche supplémentaire.");
    }, 1000);
    return value;
  }

  ngAfterViewChecked() {
    console.count("ngAfterViewChecked");
  }

  ngOnInit(): void {
  }

}
