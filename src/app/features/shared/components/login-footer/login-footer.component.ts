import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'shared-component-login-footer',
  templateUrl: './login-footer.component.html',
  styleUrls: ['./login-footer.component.scss']
})
export class LoginFooterComponent implements OnInit {

  constructor() { }
  @Input() darkmode;
  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    console.log(changes.darkmode.currentValue);
    $(document).ready(function(){
      if(changes.darkmode.currentValue){
        $('.login-footer').addClass(['dark-mode']);
      }
      else{
        $('.login-footer').removeClass(['dark-mode']);
      }
    });
  }

}
