import { Component, OnInit } from '@angular/core';
import {
  fadeInOut,
  fadeInOutTimeout,
} from '../shared/animations/textAnimations';
import * as $ from 'jquery';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fadeInOut],
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  darkmode;
  ngOnInit(): void {
  }
  addItem(event){
    this.darkmode = event;
    $(document).ready(function(){
      if(event){
        $('.login-page').addClass(['dark-mode']);
      }
      else{
        $('.login-page').removeClass(['dark-mode']);
      }
    });
  }

}
