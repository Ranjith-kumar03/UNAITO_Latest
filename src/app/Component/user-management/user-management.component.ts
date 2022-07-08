import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  searchInput:String=''
  searchSubject: Subject<String> = new Subject<String>();

  constructor() { }

  ngOnInit(): void {
  }

  searchFilter(event:any)
  {
        this.searchSubject.next(this.searchInput);
  }


}
