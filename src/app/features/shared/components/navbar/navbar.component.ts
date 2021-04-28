import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'shared-component-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() hrefHome;
  @Input() hrefSignIn;
  @Input() hrefRegister;
  @Input() hrefContact;
  darkmode;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
  }
  checktoggle(event){
    this.darkmode = event.target.checked;
    this.newItemEvent.emit(event.target.checked);
    $(document).ready(function(){
      if(event.target.checked){
        $('.header').addClass(['dark-mode']);
      }
      else{
        $('.header').removeClass(['dark-mode']);
      }
    });
  }
  ngAfterViewInit(){
   
  }
}
