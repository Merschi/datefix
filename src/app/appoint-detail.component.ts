import { Component, OnInit, Input } from '@angular/core';

import { Appoint } from './appoint';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppointService }  from './appoint.service';


@Component({
  selector: 'appoint-detail',
  templateUrl: './appoint-detail.component.html',
  styleUrls: [ './appoint-detail.component.css' ]
})

export class AppointDetailComponent implements
  OnInit{
    @Input() appoint: Appoint;

    constructor(
      private route: ActivatedRoute,
      private appointService: AppointService,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.getAppoint();
    }

    getAppoint(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.appointService.getAppoint(id)
        .subscribe(appoint => this.appoint = appoint);
    }

    goBack(): void {
      this.location.back();
    }
}
