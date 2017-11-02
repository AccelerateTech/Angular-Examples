import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<Array<object>>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

}
