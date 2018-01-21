import { Component, OnInit } from '@angular/core';
import { Appoint } from '../appoint';
import { AppointService } from '../appoint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  appoints: Appoint[] = [];

  constructor(private appointService: AppointService) { }

  ngOnInit() {
    this.getAppoints();
  }

  getAppoints(): void {
    this.appointService.getAppoints()
      .subscribe(appoints => this.appoints = appoints.slice(1, 5));
  }
}
