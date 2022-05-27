import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface tableData{
  id:number;
  projectName:String;
  customerName:String;
}

@Component({
  selector: 'app-project-list-table',
  templateUrl: './project-list-table.component.html',
  styleUrls: ['./project-list-table.component.css']
})
export class ProjectListTableComponent implements OnInit, OnDestroy {

  private searchSubscription: Subscription;
  @Input() search: Observable<void>;

  projectListTable:tableData[]=[
    {id: 1, projectName:'avantor - cloud readlines Assessment',customerName:'avantor'},
    {id: 2, projectName:'avantor - cloud readlines Assessment',customerName:'avantor'},
    {id: 3, projectName:'avantor - cloud readlines Assessment',customerName:'avantor'},
   
];


  constructor() {
    
   }
   ngOnChanges(){
    
   }

  ngOnInit(): void {
    this.searchSubscription = this.search.subscribe((data) => console.log("see the search value",data));
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
