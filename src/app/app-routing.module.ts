import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayComponent } from './day/day.component';

const routes: Routes = [
  {path:'d1',component:DayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
