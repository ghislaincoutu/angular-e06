import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-t11',
  templateUrl: './t11.component.html',
  styleUrls: ['./t11.component.scss']
})
export class T11Component implements OnInit {
  firstName: any = ['Gilles', 'Louise', 'Robert', 'Jean']

  constructor(public formBuilder21: FormBuilder) { }

  formGroup01 = this.formBuilder21.group({
    name21: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.formGroup01.value))
  }

  ngOnInit(): void {
  }

}
