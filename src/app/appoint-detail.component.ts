import { Component, Input } from '@angular/core';

import { Appoint } from './appoint';


@Component({
  selector: 'appoint-detail',
  templateUrl: './appoint-detail.component.html'
})

export class AppointDetailComponent {
  @Input() appoint: Appoint;
}
