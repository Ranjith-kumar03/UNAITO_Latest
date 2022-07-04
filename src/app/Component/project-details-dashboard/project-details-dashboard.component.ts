import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-project-details-dashboard',
  templateUrl: './project-details-dashboard.component.html',
  styleUrls: ['./project-details-dashboard.component.css']
})
export class ProjectDetailsDashboardComponent implements OnInit {

  projectId: Number

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.projectId = params['id'];

    })





  }
}
