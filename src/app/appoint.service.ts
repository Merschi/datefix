import { Injectable } from '@angular/core';

import { Appoint } from './appoint';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AppointService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  private appointsUrl = 'api/appoints';  // URL to web api

  /** Log a AppointService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AppointService: ' + message);
  }

  /** GET appoints from the server */
  getAppoints(): Observable<Appoint[]> {
    this.messageService.add('AppointService: fetched appoints');
    return this.http.get<Appoint[]>(this.appointsUrl)
      .pipe(
      tap(appoints => this.log(`fetched appoints`)),
      catchError(this.handleError('getAppoints', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getAppoint(id: number): Observable<Appoint> {
    const url = `${this.appointsUrl}/${id}`;
    return this.http.get<Appoint>(url).pipe(
      tap(_ => this.log(`fetched appoint id=${id}`)),
      catchError(this.handleError<Appoint>(`getAppoint id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


/*
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
 */
}
