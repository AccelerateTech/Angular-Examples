import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Observable<Array<object>>
  constructor(private groupService:GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups()
  }

}
