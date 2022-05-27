import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewInit {

  searchInput:String=''
  searchSubject: Subject<String> = new Subject<String>();

  constructor() { 
    
  }
  

  ngOnInit(): void {
    
  }

  searchFilter()
  {
    console.log('search value: ', this.searchInput);
    this.searchSubject.next(this.searchInput);
  }

  ngAfterViewInit(): void {
    
  }

}
