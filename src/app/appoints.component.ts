import { Component, OnInit } from '@angular/core';
import { Appoint } from './appoint';
import { AppointService } from './appoint.service';


@Component({
  selector: 'my-appoints',
  templateUrl: './appoints.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppointService]
})
export class AppointsComponent implements OnInit{
  title = 'The date fixer';
  selectedAppoint: Appoint;
  appoints: Appoint[];

  constructor( private appointService: AppointService) {}

  getAppoints(): void {
    this.appointService.getAppointsSlowly().then(appoints => this.appoints = appoints);
  }

  ngOnInit(): void {
    this.getAppoints();
  }

  onSelect(appoint: Appoint): void {
    this.selectedAppoint = appoint;
  }

}
