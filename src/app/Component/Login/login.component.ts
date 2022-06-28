import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';


export interface UserLogin {
  userName: string;
  password: string;
}




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private subscription: Subscription = new Subscription();
  submitted = false;
  rememberme;

  constructor(private fb: FormBuilder,
    private authService: AuthService, private registerService: RegisterService, private router: Router, private _notificationToast: ToasterNotificatonService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      // username: ['', [Validators.required]],
      //  password: ['', [Validators.required,Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: ['']
    });
    this.rememberme = localStorage.getItem('rememberme');
    if (this.rememberme) {
      console.log("Iam inside remember me")
      this.AutoLogin()
    }
    this.autoLogoutJWTTimeExpiry()
  }



  get userName() {
    return this.loginForm.get('userName')
  }

  get password() {
    return this.loginForm.get('password')
  }


  onSubmit() {
    console.log("see the login form value", this.loginForm.value)


    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (this.loginForm.get('userName').errors || this.loginForm.get('password').errors) {
      return;
    }

    this.subscription.add(this.authService.login(this.loginForm.value).subscribe((data: any) => {
      console.log("see the data", data)
      if (data.responseCode === 200) {

        let username = this.loginForm.get('userName').value
        this.registerService.getOneUser(username).subscribe((data) => {
          console.log("see the user", data.responseObject)

          //For showing Name on Logo
          let fullname = data.responseObject.firstName + " " + data.responseObject.lastName
          localStorage.setItem("fullname", fullname)
          this.authService.setUserName(fullname)

          //For Logout collecting username
          let userName = data.responseObject.userName
          localStorage.setItem("userName", userName)

          //For Remember Me collecting username and Password

          let password = this.loginForm.get('password').value;
          this.rememberme = this.loginForm.get('rememberMe').value;
          if (this.rememberme) {
            localStorage.setItem("userName", userName)
            localStorage.setItem("password", password)
            localStorage.setItem("rememberme", 'yes')
          }

        })


        if (data.responseObject.firstTimeLogin) {
          localStorage.setItem("sessionId", data.responseObject.sessionId)
          localStorage.setItem("jwtType", data.responseObject.jwtType)
          localStorage.setItem("jwt", data.responseObject.jwt)
          localStorage.setItem("jwtCreatedTime", data.responseObject.jwtCreatedTime)
          localStorage.setItem("jwtExpiryTime", data.responseObject.jwtExpiryTime)
          localStorage.setItem("firstTimeLogin", data.responseObject.firstTimeLogin)
          this._notificationToast.showSuccess("User Logged In Sucessfully Please Create Your own Password ", "Logged In Sucess")

          //this.router.navigate(['confirmpassword',this.loginForm.get('userName').value])
          this.router.navigate(['application'])

        } else {
          this._notificationToast.showSuccess("User Logged In Sucessfully", "Logged In Sucess")
          localStorage.setItem("sessionId", data.responseObject.sessionId)
          localStorage.setItem("jwtType", data.responseObject.jwtType)
          localStorage.setItem("jwt", data.responseObject.jwt)
          localStorage.setItem("jwtCreatedTime", data.responseObject.jwtCreatedTime)
          localStorage.setItem("jwtExpiryTime", data.responseObject.jwtExpiryTime)
          localStorage.setItem("firstTimeLogin", data.responseObject.firstTimeLogin)
          this.router.navigate(['application'])

        }
      }
    }, (err) => { console.log("see the error", err), this._notificationToast.showError(`User Log In Failed `, `${err.error.errorMessage}`) }))


  }

  AutoLogin() {
    //For Remember Me
    let expiryTime = localStorage.getItem("jwtExpiryTime")
    let expirytime = new Date(expiryTime);
    let currentTime = new Date(Date.now())
    console.log("expirytime.getTime()", expirytime.getTime())
    console.log("currentTime.getTime()", currentTime.getTime())
    if (expirytime.getTime() > currentTime.getTime()) {
      this.loginForm.get('userName').setValue(localStorage.getItem('userName'));
      this.loginForm.get('password').setValue(localStorage.getItem('password'));
    } else {
      this.loginForm.get('userName').setValue('');
      this.loginForm.get('password').setValue('');
    }


  }

  autoLogoutJWTTimeExpiry() {
    //For Auto Logout 
    let expiryTime = localStorage.getItem("jwtExpiryTime")
    let expirytime = new Date(expiryTime);
    let currentTime = new Date(Date.now())
    console.log("expirytime.getTime()", expirytime.getTime())
    console.log("currentTime.getTime()", currentTime.getTime())
    if (expirytime.getTime() < currentTime.getTime()) {
      console.log("Expiry Time expired")

      this.router.navigate(['logout'])

    }
  }

  ngOnDestroy() {
    // Unsubscribed the subscription  
    this.subscription.unsubscribe();
  }

}
