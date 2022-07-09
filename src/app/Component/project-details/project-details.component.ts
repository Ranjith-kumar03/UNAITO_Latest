import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';
import { projectData } from '../project-list-table/project-list-table.component';
declare var $:any;
import Swal from 'sweetalert2'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: Number;
  projectData:projectData;
  constructor(private projectService: ProjectService, private _notificationToast: ToasterNotificatonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params["id"];
    });
   }

  ngOnInit(): void {
    this.getProjectById()
  }

  getProjectById() {
    this.projectService.getAllProjects().subscribe((data: any) => {
      console.log("see all Projects", data)
      if (data.code === 201) {
        this.projectData = data.responseObject;
      } else {
      
        this._notificationToast.showSuccess(`No Project Data For Display`, `No Project Data Yet`)
      }
    }, (err) => {
      this._notificationToast.showError(`Project Data download failed  `, `Download Project Data Failed`)
    })
       
  }

}
