import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import * as $ from 'jquery';
@Component({
  selector: 'shared-component-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  signInGroup!: FormGroup;
  user1;
  patternMessage:string;
  loginMessage:boolean;
  @Input() darkmode;
  constructor( private authservice:AuthService, private UserService:UserService) {
   }

  ngOnInit(): void {
    this.signInGroup = new FormGroup ({
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Password: new FormControl('', [Validators.required, Validators.pattern("([0-9]+[a-zA-Z]+)|([a-zA-Z]+[0-9]+)"), Validators.minLength(8)]),
    }
    );
  }
  onSubmit(){
   this.patternMessage = this.authservice.checkInputPattern(this.signInGroup);
   this.loginMessage = this.authservice.loggingIn(this.signInGroup.getRawValue());
  console.log( this.UserService.getAll().subscribe((data)=>console.log(data)));
  }
  ngOnChanges(changes) {
    console.log(changes.darkmode.currentValue);
    $(document).ready(function(){
      if(changes.darkmode.currentValue){
        $('.card-body').addClass(['dark-mode']);
      }
      else{
        $('.card-body').removeClass(['dark-mode']);
      }
    });
  }

}
