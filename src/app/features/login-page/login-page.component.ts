import { Component, OnInit } from '@angular/core';
import {
  fadeInOut,
  fadeInOutTimeout,
} from '../shared/animations/textAnimations';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fadeInOut],
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
