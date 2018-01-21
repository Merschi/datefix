import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointsComponent }      from './appoints.component';

const routes: Routes = [
  { path: 'appoints', component: AppointsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

