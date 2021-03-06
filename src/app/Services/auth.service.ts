import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserLogin } from '../Component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  httpOptions = null;
  rememberMe: boolean = false;
  private username = new BehaviorSubject<String>('');
  public username$ = this.username.asObservable();
  // private currentUserSubject: BehaviorSubject<UserLogin>;
  // public currentUser: Observable<UserLogin>;

  constructor(
    public router: Router,
    private http: HttpClient
  ) //public ngZone: NgZone // NgZone service to remove outside scope warning
  {
    // this.rememberMe = localStorage.getItem('rememberCurrentUser') == 'true' ? true : false;

    // if ((this.rememberMe = true)) {
    //   this.currentUserSubject = new BehaviorSubject<UserLogin>(
    //     JSON.parse(localStorage.getItem('currentUser'))
    //   );
    // } else {
    //   // this.currentUserSubject = new BehaviorSubject<User>(
    //   //   JSON.parse(sessionStorage.getItem('currentUser'))
    //   // );
    // }

    // // this.currentUser = this.currentUserSubject.asObservable();

    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
  }

  // public get currentUserValue(): UserLogin {
  //   return this.currentUserSubject.value;
  // }

  login(userLogin: UserLogin) {
    console.log("see the LOGIN USERNAME", userLogin)

    return this.http.post<UserLogin>(environment.API_SIGN_IN_URL, {
      ...userLogin
    })

    // ,{headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }
  forgetPassword(email: String) {
    return this.http.put<any>(environment.API_FORGETPASSWORD_URL + email, {

    })
  }
  setUserName(name: String) {
    this.username.next(name)
  }

  getloggedIn(): boolean {
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
    localStorage.removeItem("fullname")
    localStorage.removeItem("userName")
    localStorage.removeItem('rememberme')
    localStorage.removeItem('password')

    this.username.next(null);
    this.isLoggedIn = false
    //this.loggedIn.next(false);
  }

  logout(userName:String) {
    //clear all localstorages and redirect to main publib page
    return this.http.get<any>(environment.API_LOGOUT_URL + userName)
    // this.resetcredentials();
    // this.router.navigate(['/login']);
  }


}