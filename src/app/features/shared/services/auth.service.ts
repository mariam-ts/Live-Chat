import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor( private UserService: UserService, private router: Router) { }
  //checking if user exist in DB
  loginCheck(loginData) {
    return this.UserService
      .getAll()
      .pipe(
        map((src) =>
          src.some(
            (user) =>
              user.email === loginData.email &&
              user.password === loginData.password
          )
        )
      );
  }
  login(loginData) {
    return this.UserService
      .getAll()
      .pipe(map((objs) => objs.find((obj) => obj.email === loginData.email)));
  }
  loggingIn(loginData) {
    // Check if a User exist
    this.loginCheck(loginData).subscribe((exists) => {
      if (exists) {
        this.login(loginData).subscribe((user) => {
          localStorage.setItem('userId', JSON.stringify(user.id));
          // Wait 0.2 sec after successful login and redirect to 'Dashboard'
          setTimeout(() => {
            this.router.navigate(['/loggedin']);
          }, 200);
          this.isLoggedIn = true;
          return true;
        });
      }
    });
    this.isLoggedIn = false;
    return false;
  }
  checkInputPattern(signInGroup: FormGroup){
    let message:string;
    if(signInGroup.controls['email'].value === ""){
      message = "Please fill the Email field"
    }
    else if(signInGroup.controls['password'].value === ""){
      message = "Please fill the Password field"
    }
    else if(signInGroup.controls['email'].invalid){
      message = "Email is Invalid"
    }
    else if(signInGroup.controls['password'].invalid){
      message = "Password is Invalid"
    }
    return message;
  }


}
