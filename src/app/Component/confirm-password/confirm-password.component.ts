import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router,private activatedRoute: ActivatedRoute, private _notificationToast: ToasterNotificatonService) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]

    });

    this.activatedRoute.params.subscribe(params => {
      let emailId = params['emailId'];

      this.changePasswordForm.get('email').setValue(emailId);
      console.log(`See the passed user Id, ${emailId}`);
    });

  }
  get email() {
    return this.changePasswordForm.get('email')
  }
  get password() {
    return this.changePasswordForm.get('password')
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword')
  }

  onSubmit() {
    console.log("see the login form value", this.changePasswordForm.value)


    if (this.changePasswordForm.get('password').errors && this.changePasswordForm.get('confirmPassword').errors) {
      return;
    }

    if (!this.changePasswordForm.valid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }


    this.subscription.add(this.authService.login(this.changePasswordForm.value).subscribe((data: any) => {
      console.log("see the data", data)
      if (data.responseCode === 200) {


      } else {

      }
    }))




  }

}
