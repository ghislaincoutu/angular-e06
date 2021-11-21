import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 't01', component: T01Component },
  { path: 't02', component: T02Component },
  { path: 't03', component: T03Component },
  { path: 't04', component: T04Component },
  { path: 't05', component: T05Component },
  { path: 't06', component: T06Component },
  { path: 't07', component: T07Component },
  { path: 't08', component: T08Component },
  { path: 't09', component: T09Component },
  { path: 't10', component: T10Component },
  { path: 't11', component: T11Component },
  { path: 't12', component: T12Component },
  { path: 't13', component: T13Component },
  { path: 't14', component: T14Component },
  { path: 't15', component: T15Component },
  { path: 't16', component: T16Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
