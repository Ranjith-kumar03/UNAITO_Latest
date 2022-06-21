import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
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

  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router, private _notificationToast: ToasterNotificatonService) { }

  ngOnInit(): void {



    this.loginForm = this.fb.group({


      // username: ['', [Validators.required]],
      //  password: ['', [Validators.required,Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],

      //rememberMe: ['']


      

   
    
    });
    console.log(this.loginForm.get('userName'))
    console.log(this.loginForm.get('password'))
  }

  get userName() {
    return this.loginForm.get('userName')
  }

  get password() {
    return this.loginForm.get('password')
  }


  onSubmit() {
    console.log("see the login form value", this.loginForm.value)
    
    // this.router.navigate(['application'])
    //   this.authService.setLoggedIn(true)
    //   console.log("submit clicked")
    
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (this.loginForm.get('userName').errors || this.loginForm.get('password').errors) {
      return;
    }
    // this.router.navigate(['application'])
    //       this.authService.setLoggedIn(true)
    //this.subscription.add(this.authService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value)

    this.subscription.add(this.authService.login(this.loginForm.value).subscribe((data:any) => {
      console.log("see the data", data)
      if (data.responseCode === 200) {
        if (data.responseObject.firstTimeLogin) {
          localStorage.setItem("sessionId",data.responseObject.sessionId)
          localStorage.setItem("jwtType",data.responseObject.jwtType)
          localStorage.setItem("jwt",data.responseObject.jwt)
          localStorage.setItem("jwtCreatedTime",data.responseObject.jwtCreatedTime)
          localStorage.setItem("jwtExpiryTime",data.responseObject.jwtExpiryTime)
          localStorage.setItem("firstTimeLogin",data.responseObject.firstTimeLogin)
          this._notificationToast.showSuccess("User Logged In Sucessfully Please Create Your own Password ", "Logged In Sucess")
         
          //this.router.navigate(['confirmpassword',this.loginForm.get('userName').value])
          this.router.navigate(['application'])

        } else {
          this._notificationToast.showSuccess("User Logged In Sucessfully", "Logged In Sucess")
          localStorage.setItem("sessionId",data.responseObject.sessionId)
          localStorage.setItem("jwtType",data.responseObject.jwtType)
          localStorage.setItem("jwt",data.responseObject.jwt)
          localStorage.setItem("jwtCreatedTime",data.responseObject.jwtCreatedTime)
          localStorage.setItem("jwtExpiryTime",data.responseObject.jwtExpiryTime)
          localStorage.setItem("firstTimeLogin",data.responseObject.firstTimeLogin)
          //this.authService.setLoggedIn()
          this.router.navigate(['application'])
        }
      }
    }, (err) => { console.log("see the error", err), this._notificationToast.showError(`User Log In Failed ${JSON.stringify(err)}`, "Logon Failure") }))

  }

  ngOnDestroy() {
    // Unsubscribed the subscription  
    this.subscription.unsubscribe();
  }

}
