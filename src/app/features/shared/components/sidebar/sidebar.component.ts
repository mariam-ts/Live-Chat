import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'shared-component-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() darkmode;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    console.log(changes.darkmode.currentValue);
    $(document).ready(function(){
      if(changes.darkmode.currentValue){
        $('.sidebar').addClass(['dark-mode']);
      }
      else{
        $('.sidebar').removeClass(['dark-mode']);
      }
    });
  }
}
