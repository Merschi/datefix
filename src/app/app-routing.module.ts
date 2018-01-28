import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointsComponent }      from './appoints.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AppointDetailComponent }  from './appoint-detail.component';

const routes: Routes = [
  { path: 'appoints', component: AppointsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: AppointDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

