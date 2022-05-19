import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, AfterViewChecked {
  @Input() subMenuState;
  @Input() appListState;
  @Input() notificationState;
  @Input() searchState;

  
  logotStatus = new Subject();


  opened: boolean;
  showMenu = true;
  showAppList = true;
  showNotification = true;
  showSearch = true;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
   
  }

  ngOnChanges()
  {
    console.log("inside ngOnChanges with subMenuState: ",this.subMenuState );
    console.log("inside ngOnChanges with showAppList: ",this.showAppList );
    console.log("inside ngOnChanges with showNotification: ",this.notificationState );
    console.log("inside ngOnChanges with showSearch: ",this.searchState );
    this.showMenu = this.subMenuState;
    this.showAppList = this.appListState;
    this.showNotification= this.notificationState;
    this.showSearch= this.searchState;
  }

  ngAfterViewChecked(): void {
    
     this.cdr.detectChanges();
     
  }
  


}
