import { Component, OnInit } from '@angular/core';
import { Module03Service } from '../module03.service';

@Component({
    selector: 'app-t13',
    templateUrl: './t13.component.html',
    styleUrls: ['./t13.component.scss'],
    providers: [Module03Service],
    standalone: false
})
export class T13Component implements OnInit {
  brandName = [] as any;
  goods = [] as any;

  constructor(private module03: Module03Service) { }

  ngOnInit(): void {
    this.brandName = this.module03.brandName;
    this.goods = this.module03.goods;
  }

  public brandModel: any;
  public selectBrand() {
    if (this.brandModel != "all") {
      this.goods = this.module03.goods.filter(
        item => item.name === this.brandModel
      );
    } else {
      this.brandModel = { id: -1 };
      this.goods = this.module03.goods;
    }
  }

}
