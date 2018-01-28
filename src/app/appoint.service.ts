import { Injectable } from '@angular/core';

import { Appoint } from './appoint';
import { APPOINTS } from './mock-appoints';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class AppointService {

  constructor(private messageService: MessageService) { }

  getAppoints(): Observable<Appoint[]> {
    this.messageService.add('AppointService: fetched appoints');
    return of(APPOINTS);
  }

  getAppointsp(): Promise<Appoint[]> {
    return Promise.resolve(APPOINTS);
  }

  getAppointsSlowly(): Promise<Appoint[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAppoints()), 2000);
    });
  }

  getAppoint(id: number): Observable<Appoint> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`AppointService: fetched appoint id=${id}`);
    return of(APPOINTS.find(appoint => appoint.id === id));
  }
}
