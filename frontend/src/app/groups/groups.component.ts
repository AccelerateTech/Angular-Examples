import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GroupService } from '../group.service';
import {FilterService} from '../filter.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Observable<Array<object>>
  constructor(private groupService:GroupService,
              private filterService:FilterService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups()
  }

  onFilter(searchTerm){
    this.groups = this.groupService.getGroups()
          .map(groups => 
            this.filterService.filter(groups,'name',searchTerm)
          );
  }
}
