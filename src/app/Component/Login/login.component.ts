import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
export class LoginComponent implements OnInit {

  loginForm: FormGroup;                   
  private formSubmitAttempt: boolean; 
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
      password: ['', [Validators.required,Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
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
    console.log(this.loginForm.get('password'))
    console.log(this.loginForm.get('username'))
    console.log(this.loginForm)
    
      if (this.loginForm.valid) {
      console.log("login value",this.loginForm.value)
      this.authService.login(this.loginForm.value.email,this.loginForm.value.password,this.loginForm.value.rememberMe); 
      this.router.navigate(['/application'])
    }
    this.formSubmitAttempt = true;             
console.log("click happens")
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    
  }

}
