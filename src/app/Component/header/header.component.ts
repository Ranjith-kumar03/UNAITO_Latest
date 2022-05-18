import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked,AfterContentChecked {
  isLoggedIn$: Observable<boolean>;   
  @Output() menuState = new EventEmitter();
  @Output() appListState = new EventEmitter();
  @Output() notificationState = new EventEmitter();
  @Output() searchState = new EventEmitter();
  

  constructor(private authService: AuthService,private cdr: ChangeDetectorRef) { }

  ////For Closing Sider Bar During Logout
  ngAfterViewChecked(): void {
    if(!this.authService.isLoggedIn){
      this.showMenu = false;
      this.menuState.emit(this.showMenu);
     }
     this.cdr.detectChanges();
     
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedInAsync; 
  }

  ngAfterContentChecked() {
    
}

  opened: boolean;
  showMenu = false; /* false by default, since hidden */
  toggleMenu() {
      console.log("inside toggleMenu");
      this.showMenu = !this.showMenu;

      this.showAppList= false;
      this.appListState.emit(this.showAppList);

      this.showNotification= false;
      this.notificationState.emit(this.showNotification);

      this.showSearch=false;
    this.searchState.emit(this.showSearch);

      this.menuState.emit(this.showMenu);
   }

  showAppList = false;
   toggleAppList(){
    console.log("inside toggleAppList");
    this.showAppList= !this.showAppList;

    this.showMenu = false;
    this.menuState.emit(this.showMenu);

    this.showNotification= false;
    this.notificationState.emit(this.showNotification);

    this.showSearch=false;
    this.searchState.emit(this.showSearch);

    this.appListState.emit(this.showAppList);
   }

   showNotification = false;
   toggleNotification(){
    console.log("inside toggleNotification");
    this.showNotification= !this.showNotification;

    this.showMenu = false;
    this.menuState.emit(this.showMenu);

    this.showAppList= false;
    this.appListState.emit(this.showAppList);

    this.showSearch=false;
    this.searchState.emit(this.showSearch);

    this.notificationState.emit(this.showNotification);

   }

   showSearch = false;
   toggleSearch(){
    
    this.showSearch= !this.showSearch;
    console.log("inside toggleSearch",this.showSearch);
    this.showMenu = false;
    this.menuState.emit(this.showMenu);

    this.showAppList= false;
    this.appListState.emit(this.showAppList);

    this.showNotification= false;
    this.notificationState.emit(this.showNotification);

    this.searchState.emit(this.showSearch);

   }





}
