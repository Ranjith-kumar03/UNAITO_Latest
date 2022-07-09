import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {

  searchInput:String=''
  searchSubject: Subject<String> = new Subject<String>();

  constructor() { }

  ngOnInit(): void {
  }

  searchFilter(event:any)
  {
    console.log('search value: ', this.searchInput);
    this.searchSubject.next(this.searchInput);
  }

}
