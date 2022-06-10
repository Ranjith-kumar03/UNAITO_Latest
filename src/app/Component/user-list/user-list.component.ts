import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


export interface userData{
  SL_NO:number;
 USERNAME:String;
  ROLE:String;
  EMAIL:String;
  CONTACT_NO:String;
  LASTUPDATEDON:String;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  private searchSubscription: Subscription;
  @Input() search: Observable<void>;

  customerListTable:userData[]=[
    {SL_NO: 1, USERNAME:'Anna Dianne',ROLE:'Consultant',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    {SL_NO: 1, USERNAME:'Mark Lukas',ROLE:'Reviewer',EMAIL:'mark.lukas@acldigital.com',CONTACT_NO:'+91-9941128743',LASTUPDATEDON:'20/12/2021, 10:15AM'},
    {SL_NO: 1, USERNAME:'David Cameroon',ROLE:'Consultant',EMAIL:'david.cameroon@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    {SL_NO: 1, USERNAME:'Anna Dianne',ROLE:'consultant',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
   
   
];

  constructor() { }

  

  ngOnInit(): void {
    this.searchSubscription = this.search.subscribe((data) => console.log("see the search value",data));
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
