import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'shared-component-message-sidebar',
  templateUrl: './message-sidebar.component.html',
  styleUrls: ['./message-sidebar.component.scss']
})
export class MessageSidebarComponent implements OnInit {

  img: string;
  Users: Array<IUser>;
  avatar:string;
  constructor(private http: HttpClient, private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAll().subscribe((data) =>{
     this.Users = data;
     console.log(this.Users)
    }
    
    );
    this.avatar=localStorage.getItem('Avatar');
  }

}
