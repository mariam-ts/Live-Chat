import { Component, forwardRef, Input, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
