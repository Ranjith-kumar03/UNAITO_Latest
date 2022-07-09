import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from 'src/app/Services/project.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';
declare var $:any;
import Swal from 'sweetalert2'

export interface projectData {
  projectId: number;
  customerId: number;
  statusId: number;
  projectName: String;
  description: String;
  customerName: String;
  startDate: String;
  endDate: String;
  duration: String;
  drivers: {};
  scope:{};
  activityPlanList:{};
  projectTeam: {};
  resourceLoadingList: {};
}

@Component({
  selector: 'app-project-list-table',
  templateUrl: './project-list-table.component.html',
  styleUrls: ['./project-list-table.component.css']
})
export class ProjectListTableComponent implements OnInit, OnDestroy {

  projectName: String;
  searchString: string;

  private searchSubscription: Subscription;
  @Input() search: Observable<void>;

  projectListTable: projectData[] = [
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
    this.getAllProjects()
  }
  
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((data: any) => {
      console.log("see all Projects", data)
      if (data.code === 201) {
        this.projectListTable = data.responseObject;
      } else {
        this.projectListTable = [];
        this._notificationToast.showSuccess(`No Projects For Display`, `No Projects Yet`)
      }
    }, (err) => {
      this._notificationToast.showError(`Projects download failed  `, `Download all Projects Failed`)
    })
   
    setTimeout(()=>{
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    },500);
  }
  
  onDeleteItem(e: Event, projectName: String) {
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
