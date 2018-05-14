import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BasicResponse } from '../_classes/basic-response';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SignupForm } from '../_classes/signup-form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:3000/api';
  private endpointUrl = this.baseUrl + '/v1/business/signup/';

  constructor(private http: HttpClient) { }

  signup(signupForm: SignupForm): Observable<BasicResponse> {
    console.log("about to send");
    console.log(JSON.stringify(signupForm));
    return this.http.post<BasicResponse>(this.endpointUrl, signupForm, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
