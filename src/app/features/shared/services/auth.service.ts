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
              user.Email === loginData.Email &&
              user.Password === loginData.Password
          )
        )
      );
  }
  login(loginData) {
    return this.UserService
      .getAll()
      .pipe(map((objs) => objs.find((obj) => obj.Email === loginData.Email)));
  }
  loggingIn(loginData) {
    // Check if a User exist
    this.loginCheck(loginData).subscribe((exists) => {
      if (exists) {
        console.log(exists);
        console.log("Exists")
        this.login(loginData).subscribe((user) => {
          localStorage.setItem('userId', JSON.stringify(user.id));
          localStorage.setItem('Avatar', JSON.stringify(user.Avatar));
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
    if(signInGroup.controls['Email'].value === ""){
      message = "Please fill the Email field"
    }
    else if(signInGroup.controls['Password'].value === ""){
      message = "Please fill the Password field"
    }
    else if(signInGroup.controls['Email'].invalid){
      message = "Email is Invalid"
    }
    else if(signInGroup.controls['Password'].invalid){
      message = "Password is Invalid"
    }
    return message;
  }


}
