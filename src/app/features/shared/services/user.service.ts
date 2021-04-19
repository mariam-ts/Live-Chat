import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HTTP: HttpClient) { }
  create(user: IUser): Observable<IUser>{
    return this.HTTP
    .post<IUser>(`${environment.BaseUrl}users`, user);
  }
  getAll(){
    return this.HTTP
    .get<IUser[]>(`${environment.BaseUrl}users`)
    .pipe(retry(2), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // User error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  post(postData){
    this.HTTP.post(`${environment.BaseUrl}users`,postData )
    .subscribe(res => console.log(res));
    alert("Registered");
  }
}
