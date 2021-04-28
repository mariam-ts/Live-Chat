import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
//import {multer} from 'multer';
import * as $ from 'jquery';
@Component({
  selector: 'component-shared-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  submittedUsers: any;
  @Input() darkmode;
  constructor(private fb: FormBuilder, private http:HttpClient, private UserService: UserService ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      FirstName: new FormControl ("", [Validators.required]),
      LastName: new FormControl("", [Validators.required]),
      Email: new FormControl ("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Password: new FormControl("", [Validators.required,  Validators.pattern("([0-9]+[a-zA-Z]+)|([a-zA-Z]+[0-9]+)"), Validators.minLength(8)]),
      RepeatPassword: new FormControl("", [Validators.required,]),
      Avatar: new FormControl("", [Validators.required])
    });
    console.log(this.RegisterForm.get("FirstName").valid)
  }
  OnSubmit(){
    if(this.RegisterForm.invalid){
      alert("Error");
      return;
    }
   /// this.submittedUsers.push(this.RegisterForm.value);
    const postData = {
       FirstName:this.RegisterForm.value.FirstName,
       LastName:this.RegisterForm.value.LastName,
       Email:this.RegisterForm.value.Email,
       Password:this.RegisterForm.value.Password,
       Avatar:this.RegisterForm.value.Avatar
       };
    this.UserService.post(postData);
    this.RegisterForm.reset();
  }
  uploadFile(e){
  }
  ngOnChanges(changes) {
    console.log(changes.darkmode.currentValue);
    $(document).ready(function(){
      if(changes.darkmode.currentValue){
        $('.register-form').addClass(['dark-mode']);
      }
      else{
        $('.register-form').removeClass(['dark-mode']);
      }
    });
  }
}
