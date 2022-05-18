import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;   
  subMenuState:boolean = false;
  appListState:boolean = false;
  notificationState:boolean = false;
  searchState:boolean = false;
  @Output() openSideBar = new EventEmitter();
  
  



  menuClicked(evnt){
    this.subMenuState = evnt;
    
    console.log("inside burgerClicked: pls. change showMenu to be:",this.subMenuState);
  }
  
  appListClicked(evnt){
    this.appListState = evnt;
    
    console.log("inside appListClicked: pls. change appListClicked to be:",this.appListState);
  }

  notificationClicked(evnt){
  this.notificationState=evnt;
  
  console.log("inside notificationClicked: pls. change notificationClickedto be:",this.notificationState);
  }

  searchClicked(evnt){
    this.searchState=evnt;
   
    console.log("inside searchClicked: pls. change searchClicked to be:",this.searchState);
    }

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedInAsync; 
  }

  ngAfterViewChecked()
  {
    this.cdr.detectChanges()
  }

  onClick()
  {
    this.openSideBar.emit()
  }
  

  onLogout(){
    this.authService.logout();                      
  }
}
