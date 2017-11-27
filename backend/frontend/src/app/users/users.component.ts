import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersObservable: Observable<Array<User>>
  usersNormal: Array<User>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.usersObservable = this.userService.getUsers()
    this.userService.getUsers().subscribe((users)=>{
      this.usersNormal = users
    });
  }

}
