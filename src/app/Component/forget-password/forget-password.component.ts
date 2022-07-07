import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  forgetPasswordForm: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private authService: AuthService, 
    private router: Router, private activatedRoute: ActivatedRoute,private _notificationToast: ToasterNotificatonService) { }

  ngOnInit(): void {

    this.forgetPasswordForm = this.fb.group({
      userName: ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(params => {
      let emailId = params['emailId'];

      this.forgetPasswordForm.get('userName').setValue(emailId);
      console.log(`See the passed user Id, ${emailId}`);
    });

  }

  get userName() {
    return this.forgetPasswordForm.get('userName')
  }
  onSubmit() {
    this.subscription.add(this.authService.forgetPassword(this.forgetPasswordForm.get('userName').value).subscribe((data) => {
      console.log("see the data", data)
      if (data.responseCode === 200) {
        console.log("Password Replaced")
        this._notificationToast.showSuccess("Password Mail is sent ", "Password Change Success")
        this.router.navigate(['login'])
      }
    },(error)=>{
      this._notificationToast.showError(`Password Mail error ${JSON.stringify(error)}`, "Password Change failed")
    }))
    // 
  }


  ngOnDestroy() {
    // Unsubscribed the subscription  
    this.subscription.unsubscribe();
  }
}


