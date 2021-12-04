import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Site1Component } from './components/site1/site1.component';
import { Site2Component } from './components/site2/site2.component';

const routes: Routes = [{
path: "site1",
component: Site1Component
},{
  path: "site2",
  component: Site2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
