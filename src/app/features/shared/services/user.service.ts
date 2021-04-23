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
    .post<IUser>(`https://6081b77e73292b0017cde142.mockapi.io/api/users`, user);
  }
  getAll(){
    return this.HTTP
    .get<IUser[]>(`https://6081b77e73292b0017cde142.mockapi.io/api/users`)
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
    this.HTTP.post(`https://6081b77e73292b0017cde142.mockapi.io/api/users`,postData )
    .subscribe(res => console.log(res));
    alert("Registered");
  }
}
