import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from 'src/app/Services/project.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';
declare var $:any;
import Swal from 'sweetalert2'


export interface customerData{
  customerId:number;
  customerName:String;
  userId:number;
  location:String;
  spocFirstName:String;
  spocLastName:String;
  emailId:String;
  contactNumber: number;
  isActive: number
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy  {

  customerName:String
  searchString: string;
  


  private searchSubscription: Subscription;
  @Input() search: Observable<void>;

  customerListTable:customerData[]=[
    // {SL_NO: 1, CUSTOMERNAME:'Avantor',LOCATION:'Chennai',SPOCNAME:'Martin Fraser',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    // {SL_NO: 2, CUSTOMERNAME:'Verizon',LOCATION:'Chennai',SPOCNAME:'Mary Ann',EMAIL:'mark.lukas@acldigital.com',CONTACT_NO:'+91-9941128743',LASTUPDATEDON:'20/12/2021, 10:15AM'},
    // {SL_NO: 3, CUSTOMERNAME:'Capella',LOCATION:'Banagalore',SPOCNAME:'John Fisher',EMAIL:'david.cameroon@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
    // {SL_NO: 4, CUSTOMERNAME:'HealthLand',LOCATION:'Pune',SPOCNAME:'Nicola Vaughan',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
   
   
];

constructor(private projectService: ProjectService, private _notificationToast: ToasterNotificatonService) { 

  //this.userName = localStorage.getItem("userName")
}



ngOnInit(): void {
  this.searchSubscription = this.search.subscribe((data: any) => {
    this.searchString = data;
    console.log("see the search value", data)
  }
  );
  this.getAllCustomers()
}

getAllCustomers() {
  this.projectService.getAllCustomers().subscribe((data: any) => {
    console.log("see all customers", data)
    if (data.responseCode === 200) {
      this.customerListTable = data.responseObject;
    } else {
      this.customerListTable = [];
      this._notificationToast.showSuccess(`No Customers For Display`, `No Customers Yet`)
    }
  }, (err) => {
    this._notificationToast.showError(`Customers download failed  `, `Download all Customers Failed`)
  })
 
  setTimeout(()=>{
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },500);
}

onDeleteItem(e: Event, customerName: String) {
  e.stopPropagation()
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // this.projectService.delete(userName).subscribe((data) => {
      //   if (data.responseCode === 200) {
      //     Swal.fire(
      //       'Deleted!',
      //       `${userName} details has been deleted.`,
      //       'success'
      //     )
      //   }

      //   this.getAllUsers()
      // }, (err) => {
      //   this._notificationToast.showError("You are not authorized to Delete other user's profile.", "Unauthorized Deletion")
      // })

    }
  })

}

ngAfterViewInit(): void {
 
}

ngOnDestroy() {
  this.searchSubscription.unsubscribe();
}
 



}
