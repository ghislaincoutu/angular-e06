import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';
import { T03Component } from './t03/t03.component';
import { T04Component } from './t04/t04.component';
import { T05Component } from './t05/t05.component';
import { T06Component } from './t06/t06.component';
import { T07Component } from './t07/t07.component';
import { T08Component } from './t08/t08.component';
import { T09Component } from './t09/t09.component';
import { T10Component } from './t10/t10.component';
import { T11Component } from './t11/t11.component';
import { T12Component } from './t12/t12.component';
import { T13Component } from './t13/t13.component';
import { T14Component } from './t14/t14.component';
import { T15Component } from './t15/t15.component';
import { T16Component } from './t16/t16.component';
import { GoodsComponent } from './goods/goods.component';
import { Transform01Pipe } from './transform01.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    T01Component,
    T02Component,
    T03Component,
    T04Component,
    T05Component,
    T06Component,
    T07Component,
    T08Component,
    T09Component,
    T10Component,
    T11Component,
    T12Component,
    T13Component,
    T14Component,
    T15Component,
    T16Component,
    GoodsComponent,
    Transform01Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
