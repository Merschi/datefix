import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { AppointDetailComponent } from './appoint-detail.component';
import { AppointsComponent } from './appoints.component';
import { AppointService } from './appoint.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    AppointDetailComponent,
    AppointsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers: [
    AppointService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
