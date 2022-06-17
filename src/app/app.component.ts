import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn$: Observable<boolean>;
  //isLoggedIn$: Subscription
  loggedIn:boolean;
  screen_Application:boolean = false;
  // subMenuState: boolean = false;
  // appListState: boolean = false;
  // notificationState: boolean = false;
  // //searchState: boolean = false;
  // openSideBarStatus: boolean=false

  menuStatefirstTime: boolean = false;
  searchStatefirstTime: boolean = false;
  toggleNotificationStatefirstTime: boolean = false;
  toggleAppListStatefirstTime: boolean = false



  menuState: string = 'out';
  searchState: string = 'out';
  toggleNotificationState: string = 'out'
  toggleAppListState: string = 'out'

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    //console.log(this.menuState)
    this.menuStatefirstTime = true;
  }

  closeMenu() {
    //console.log(this.menuState, this.menuStatefirstTime);
    if (this.menuState === 'in' && !this.menuStatefirstTime) {
      this.menuState = 'out';
    }
    this.menuStatefirstTime = false;
  }


  toggleSearch() {
    this.searchState = this.searchState === 'out' ? 'in' : 'out';
    console.log(this.searchState)
    this.searchStatefirstTime = true;
  }

  closeSearch() {
    console.log(this.searchState, this.searchStatefirstTime);
    if (this.searchState === 'in' && !this.searchStatefirstTime) {
      this.searchState = 'out';
    }
    this.searchStatefirstTime = false;
  }

  toggleNotification() {
    this.toggleNotificationState = this.toggleNotificationState === 'out' ? 'in' : 'out';
    console.log(this.toggleNotificationState)
    this.toggleNotificationStatefirstTime = true;
  }

  closeNotification() {
    console.log(this.toggleNotificationState, this.toggleNotificationStatefirstTime);
    if (this.toggleNotificationState === 'in' && !this.toggleNotificationStatefirstTime) {
      this.toggleNotificationState = 'out';
    }
    this.toggleNotificationStatefirstTime = false;
  }


  toggleAppList() {
    this.toggleAppListState = this.toggleAppListState === 'out' ? 'in' : 'out';
    console.log(this.toggleAppListState)
    this.toggleAppListStatefirstTime = true;
  }

  closeAppList() {
    console.log(this.toggleAppListState, this.toggleAppListStatefirstTime);
    if (this.toggleAppListState === 'in' && !this.toggleAppListStatefirstTime) {
      this.toggleAppListState = 'out';
    }
    this.toggleAppListStatefirstTime = false;
  }



  

  constructor(public authService: AuthService, private cdr: ChangeDetectorRef, private router: Router) { 
    this.isLoggedIn$ = this.authService.isLoggedInAsync;

    this.isLoggedIn$.subscribe((status)=>{
      this.loggedIn=status;
      console.log("Am i logged In",this.loggedIn)
      })
    
   }
 

  isApplicationView() {
   
    console.log("see the router url",this.router.url)
    if(this.router.url.match('/application'))
    {
      console.log("Iam inside true")
      return true;
    }else{
      console.log("Iam inside false")
      return false;
    }
   
  }

  clickNotification(e)
  {
   console.log("Iam clciked in Notifcation new")
  }

  clickApplication(e)
  {
    console.log("Iam clciked in Application new")
  }

  clickMenu(e)
  {
    console.log("Iam clciked in Menu new")
  }

  ngOnChanges()
  {
    
  }

  ngOnInit() {
   
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges()
    if (!this.authService.isLoggedIn) {
      this.closeMenu()
    }
  }

  ngOnDestroy(): void {
    //this.isLoggedIn$.unsubscribe()
  }


}
