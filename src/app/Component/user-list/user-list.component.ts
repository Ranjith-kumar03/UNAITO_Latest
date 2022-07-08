import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';
declare var $:any;
import Swal from 'sweetalert2'

export interface userData {
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  contactNumber: String,
  location: String,
  roleName: String
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  userName:String
  searchString: string;
  


  private searchSubscription: Subscription;
  @Input() search: Observable<void>;
  customerListTable: userData[] = []
  //   customerListTable:userData[]=[
  //     {SL_NO: 1, USERNAME:'Anna Dianne',ROLE:'Consultant',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
  //     {SL_NO: 2, USERNAME:'Mark Lukas',ROLE:'Reviewer',EMAIL:'mark.lukas@acldigital.com',CONTACT_NO:'+91-9941128743',LASTUPDATEDON:'20/12/2021, 10:15AM'},
  //     {SL_NO: 3, USERNAME:'David Cameroon',ROLE:'Consultant',EMAIL:'david.cameroon@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
  //     {SL_NO: 4, USERNAME:'Anna Dianne',ROLE:'consultant',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},
  //     {SL_NO: 5, USERNAME:'Ranjith',ROLE:'consultant',EMAIL:'anna.aianne@acldigital.com',CONTACT_NO:'+91-944567321',LASTUPDATEDON:'12/01/2022, 10:15AM'},


  // ];

  constructor(private registerService: RegisterService, private _notificationToast: ToasterNotificatonService) { 

    this.userName = localStorage.getItem("userName")
  }



  ngOnInit(): void {
    this.searchSubscription = this.search.subscribe((data: any) => {
      this.searchString = data;
      console.log("see the search value", data)
    }
    );
    this.getAllUsers()
  }

  getAllUsers() {
    this.registerService.getAllUsers().subscribe((data: any) => {
      console.log("see all users", data)
      if (data.responseCode === 200) {
        this.customerListTable = data.responseObject;
      } else {
        this.customerListTable = [];
        this._notificationToast.showSuccess(`No Users For Display`, `No Users Yet`)
      }
    }, (err) => {
      this._notificationToast.showError(`Users download failed  `, `Download all users Failed`)
    })
  }

  onDeleteItem(e: Event, userName: String) {
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
        this.registerService.delete(userName).subscribe((data) => {
          if (data.responseCode === 200) {
            Swal.fire(
              'Deleted!',
              `${userName} details has been deleted.`,
              'success'
            )
          }

          this.getAllUsers()
        }, (err) => {
          this._notificationToast.showError("You are not authorized to Delete other user's profile.", "Unauthorized Deletion")
        })

      }
    })

  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
