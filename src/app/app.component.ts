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

  loggedIn: boolean;
  constructor(public authService: AuthService, private cdr: ChangeDetectorRef, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedInAsync;

    this.isLoggedIn$.subscribe((status) => {
      this.loggedIn = status;
      console.log("Am i logged In", this.loggedIn)
    })

  }

  ngOnChanges() {

  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.cdr.detectChanges()

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
