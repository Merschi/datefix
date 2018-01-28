import { Component, OnInit } from '@angular/core';
import { Appoint } from './appoint';
import { AppointService } from './appoint.service';


@Component({
  selector: 'my-appoints',
  templateUrl: './appoints.component.html',
  styleUrls: ['./app.component.css']
})
export class AppointsComponent implements OnInit{
  appoints: Appoint[];

  constructor( private appointService: AppointService) {}

  getAppoints(): void {
    // this.appointService.getAppointsSlowly().then(appoints => this.appoints = appoints);
    this.appointService.getAppoints()
      .subscribe(appoints => this.appoints = appoints);
  }

  ngOnInit(): void {
    this.getAppoints();
  }

}
