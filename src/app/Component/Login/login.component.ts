import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';


export interface User {
  userName: string;
  password: string;
}

// export function customValidator(): ValidatorFn {
//   const regExp =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
//   return (control: AbstractControl): { [key: string]: {message: string} } | null => {

//     if (regExp.test(control.value)) {
//       return {
//         pattern1Error: {
//           message: `Error message for pattern 1`
//         }
//       };
//     } 

//   return null;
//   };
// }


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  loginForm: FormGroup;                   
  private subscription: Subscription = new Subscription();
  submitted = false;
  
  constructor(private fb: FormBuilder,         
  private authService: AuthService, private router:Router ) { }

  ngOnInit(): void {
    
    // this.loginForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['',  [Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
    //   rememberMe: new FormControl(false),
      
    // });

    this.loginForm = this.fb.group({
      
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      rememberMe: ['']
  });
  console.log(this.loginForm.get('username'))
  console.log(this.loginForm.get('password'))
}

get username(){
  return this.loginForm.get('username')
}

get password(){
  return this.loginForm.get('password')
}
  // isFieldInvalid(field: string) { 
  //   console.log("see for ",field,!this.loginForm.get(field).valid,this.loginForm.get(field).touched,this.loginForm.get(field).untouched ,this.formSubmitAttempt)
  //   return (
  //     (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
  //     (this.loginForm.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  onSubmit() {
    // this.router.navigate(['application'])
    //   this.authService.setLoggedIn(true)
    //   console.log("submit clicked")
    // if(this.loginForm.get('username').errors && this.loginForm.get('password').errors)
    // {
    //   return;
    // }

    if(!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
this.router.navigate(['application'])
      this.authService.setLoggedIn(true)
      console.log("submit clicked")

    // this.subscription.add(this.authService.login(this.loginForm.get('username').value,this.loginForm.get('password').value ).subscribe((data) => {
    //   console.log("see the data",data)
    //   if(data.responseObject==="Success") {
    //     this.authService.setLoggedIn(true)
    //   } else {
    //     window.alert(data.responseCode)
    //   }
    // },(err)=>{console.log("see the error",err)}))
    
  }

  ngOnDestroy() {  
    // Unsubscribed the subscription  
   this.subscription.unsubscribe();  
   }  

}
