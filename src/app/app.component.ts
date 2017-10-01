import { Component, OnInit } from '@angular/core';
import { Appoint } from './appoint';
import { AppointService } from './appoint.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppointService]
})
export class AppComponent implements OnInit{
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
