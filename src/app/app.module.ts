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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
