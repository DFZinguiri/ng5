import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component' // ajouter dans les routing
import {AboutComponent} from './about/about.component' // ajouter dans les routing


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'about/:id',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
