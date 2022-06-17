import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


export interface userData{
  SL_NO:number;
  CUSTOMERNAME:String;
  LOCATION:String;
  SPOCNAME:String;
  EMAIL:String;
  CONTACT_NO:String;
  LASTUPDATEDON:String;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy  {

  private searchSubscription: Subscription;
  @Input() search: Observable<void>;

  customerListTable:userData[]=[
    {SL_NO: 1, CUSTOMERNAME:'Avantor',LOCATION:'Chennai',SPOCNAME:'Martin Fraser',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    {SL_NO: 2, CUSTOMERNAME:'Verizon',LOCATION:'Chennai',SPOCNAME:'Mary Ann',EMAIL:'mark.lukas@acldigital.com',CONTACT_NO:'+91-9941128743',LASTUPDATEDON:'20/12/2021, 10:15AM'},
    {SL_NO: 3, CUSTOMERNAME:'Capella',LOCATION:'Banagalore',SPOCNAME:'John Fisher',EMAIL:'david.cameroon@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    {SL_NO: 4, CUSTOMERNAME:'HealthLand',LOCATION:'Pune',SPOCNAME:'Nicola Vaughan',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
   
   
];

  constructor() { }

  ngOnInit(): void {
    this.searchSubscription = this.search.subscribe((data) => console.log("see the search value",data));
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
 



}
