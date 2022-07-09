import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { ProjectService } from "src/app/Services/project.service";
import { ToasterNotificatonService } from "src/app/Services/toaster.notificaton.service";




@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"],
})
export class ProjectListComponent implements OnInit {
  searchInput:String=''
  searchSubject: Subject<String> = new Subject<String>();

  constructor() { }

  ngOnInit(): void {
  }

  searchFilter(event:any)
  {
    console.log('search value: ', this.searchInput);
    this.searchSubject.next(this.searchInput);
  }
  
 

  
}
