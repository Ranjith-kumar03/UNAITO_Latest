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
  //isLoggedIn$: Observable<boolean>;
  name:String;
  loggedIn: boolean;
  constructor(public authService: AuthService, private cdr: ChangeDetectorRef, private router: Router) {
    this.authService.username$.subscribe((username) => {
      this.name=username;
      console.log("see the full name",this.name )
    })


  }

  ngOnChanges() {
     ///for Firstname and Last Name Display on ICON
    
  }

 
   
   

  getInitials(nameString) {
    console.log("see the name string",nameString)
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.cdr.detectChanges()
    // this.name = !!localStorage.getItem('fullname') ? localStorage.getItem('fullname') : ""
    // console.log("see the full name",this.name )
    
  }

  isApplicationView() {

    console.log("see the router url", this.router.url)
    if (this.router.url.match('/application')) {
      console.log("Iam inside true")
      return true;
    } else {
      console.log("Iam inside false")
      return false;
    }

  }

  clickNotification(e) {
    console.log("Iam clciked in Notifcation new")
  }

  clickApplication(e) {
    console.log("Iam clciked in Application new")
  }

  clickMenu(e) {
    console.log("Iam clciked in Menu new")
  }

  logOut() {
    this.authService.logout();
  }



  ngOnDestroy(): void {
    //this.isLoggedIn$.unsubscribe()
  }


}
