
import { Component, OnInit, ElementRef, Renderer2, HostListener, ChangeDetectorRef, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent implements OnInit {

  constructor(private el:ElementRef, private renderer:Renderer2,private cdr: ChangeDetectorRef,private authService: AuthService) { }

  

  // @HostListener('click', ['$event.target'])
  // onClick(target){
  //   let item = this.el.nativeElement.querySelector('li');

  //   alert(item);
  // }

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
  

  ngOnInit(): void {
    //this.authService.logout();
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