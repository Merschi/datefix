import { Injectable } from '@angular/core';

import { Appoint } from './appoint';
import { APPOINTS } from './mock-appoints';

@Injectable()
export class AppointService {
  getAppoints(): Promise<Appoint[]> {
    return Promise.resolve(APPOINTS);
  }

  getAppointsSlowly(): Promise<Appoint[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAppoints()), 2000);
    });
  }
}
