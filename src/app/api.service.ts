import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Smartphone } from './smartphone';
import { Observable, of } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { HttpHeaders } from '@angular/common/http';

const localUrl = 'assets/data/smartphone.json';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSmartphone(): Observable<any> {
    return this.http.get<Smartphone[]>(localUrl).pipe(
      retry(3), catchError(this.handleError<Smartphone[]>('getSmartphone', [])));
  }  
    

  getSmartphoneById(id: any): Observable<any> {
    return this.http.get<Smartphone>(localUrl + id).pipe(
      retry(3), catchError(this.handleError<Smartphone>('getSmartphone')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
  
  
}
