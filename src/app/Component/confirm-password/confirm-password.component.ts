import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmPasswordValidator } from 'src/app/CrossFieldValidators/cross.field.custom.validators';
import { AuthService } from 'src/app/Services/auth.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted: boolean = false;
  private subscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder,
    private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private _notificationToast: ToasterNotificatonService) { }

  ngOnInit(): void {
    // this.changePasswordForm = this.fb.group({

    //   email: ['', [Validators.required]],
    //   password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    //   confirmPassword: ['', [Validators.required, ]]

    // },{validator: this.passwordMatchValidator});
    this.changePasswordForm = this.fb.group(
      {
        email: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );




    this.activatedRoute.params.subscribe(params => {
      let emailId = params['emailId'];

      this.changePasswordForm.get('email').setValue(emailId);
      console.log(`See the passed user Id, ${emailId}`);
    });

  }


  // get email() {
  //   return this.changePasswordForm.get('email')
  // }
  // get password() {
  //   return this.changePasswordForm.get('password')
  // }

  // get confirmPassword() {
  //   return this.changePasswordForm.get('confirmPassword')
  // }
  /// ref https://stackblitz.com/edit/angular-match-password-validation?file=src%2Fapp%2Fconfirm-password.validator.ts
  onSubmit() {
    this.submitted = true;


    if (!this.changePasswordForm.valid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }
    if (this.changePasswordForm.get('email').errors || this.changePasswordForm.get('password').errors || this.changePasswordForm.get('confirmPassword').errors) {
      return;
    }
    console.log("see the change password values", this.changePasswordForm.value)

    // this.authService.logout()
    // this.router.navigate(['login'])
    let userName = localStorage.getItem("userName")
    this.authService.logout(userName).subscribe((data) => {
      if (data.responseCode === 200) {
        this.authService.resetcredentials()
        this.router.navigate(['/login']);
      }
    }, (err) => {
      this._notificationToast.showError(`User Log Out Failed `, "Log Out Failed")
    });
  }

}
