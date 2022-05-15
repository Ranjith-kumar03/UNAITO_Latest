import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../Component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  httpOptions = null;
  rememberMe: boolean = false;
  private loggedIn = new BehaviorSubject<boolean>(false);

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    public router: Router,
    private http: HttpClient
  ) //public ngZone: NgZone // NgZone service to remove outside scope warning
  {
    //this.rememberMe = localStorage.getItem('rememberCurrentUser') == 'true' ? true : false;

    if ((this.rememberMe = true)) {
      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser'))
      );
    } else {
      // this.currentUserSubject = new BehaviorSubject<User>(
      //   JSON.parse(sessionStorage.getItem('currentUser'))
      // );
    }

    this.currentUser = this.currentUserSubject.asObservable();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string, isRememberMe: boolean) {
    // return this.http
    //   .post<any>(environment.apiUrl + 'users/authenticate', { _id: username, password: password })
    //   .pipe(
    //     tap(user => {
    //       if (user && user.token) {
    //         if (isRememberMe) {
    //           this.resetcredentials();
    //           //your logged  out when you click logout
    //           localStorage.setItem('currentUser', JSON.stringify(user));
    //           localStorage.setItem('rememberCurrentUser', 'true');
    //         } else {
    //           //your logged  out when page/ browser is closed
    //           sessionStorage.setItem('currentUser', JSON.stringify(user));
    //         }
    //         // login successful if there's a jwt token in the response
    //         this.isLoggedIn = true;
    //         this.currentUserSubject.next(user);
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     })
    //   );
    if (username !== '' && password !== '' ) { 
      this.loggedIn.next(true);
      // localStorage.setItem('currentUser', JSON.stringify(username));
      // localStorage.setItem('rememberCurrentUser', 'true');
      this.router.navigate(['/application']);
    }
  }
  resetcredentials() {
    //clear all localstorages
    localStorage.removeItem('rememberCurrentUser');
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);
  }

  logout() {
    //clear all localstorages and redirect to main publib page
    this.resetcredentials();
    this.router.navigate(['/login']);
  }

  get isLoggedInAsync() {
    return this.loggedIn.asObservable();
  }
}