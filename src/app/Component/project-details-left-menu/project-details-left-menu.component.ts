import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details-left-menu',
  templateUrl: './project-details-left-menu.component.html',
  styleUrls: ['./project-details-left-menu.component.css']
})
export class ProjectDetailsLeftMenuComponent implements OnInit {
  @Input() project_id:any
  constructor() { }

  ngOnInit(): void {
    console.log("see the value transfered for project id",this.project_id)
  }
  

  

}
