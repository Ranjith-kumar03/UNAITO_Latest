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
    this.rememberMe = localStorage.getItem('rememberCurrentUser') == 'true' ? true : false;

    if ((this.rememberMe = true)) {
      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser'))
      );
    } else {
      // this.currentUserSubject = new BehaviorSubject<User>(
      //   JSON.parse(sessionStorage.getItem('currentUser'))
      // );
    }

    // this.currentUser = this.currentUserSubject.asObservable();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string) {
    console.log("see the LOGIN USERNAME", userName)
    console.log("see theLOGIN password", password)
    return this.http.post<any>(environment.API_SIGN_IN_URL, {
      userName,
      password
    })

    // ,{headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }

  getloggedIn(): boolean {
    this.loggedIn.next(true);
    this.isLoggedIn = true
    return !!localStorage.getItem("jwt");
  }
  getToken() {
    return localStorage.getItem('jwt');
  }

  resetcredentials() {

    localStorage.removeItem("sessionId")
    localStorage.removeItem("jwtType")
    localStorage.removeItem("jwt")
    localStorage.removeItem("jwtCreatedTime")
    localStorage.removeItem("jwtExpiryTime")
    localStorage.removeItem("firstTimeLogin")

    this.currentUserSubject.next(null);
    this.isLoggedIn = false
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