import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';


export interface User {
  userName: string;
  password: string;
}




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
    
   

    this.loginForm = this.fb.group({
      

     // username: ['', [Validators.required]],
    //  password: ['', [Validators.required,Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    userName: ['', ],
      password: ['', ],
      rememberMe: ['']
  });
  console.log(this.loginForm.get('userName'))
  console.log(this.loginForm.get('password'))
}

get username(){
  return this.loginForm.get('userName')
}

get password(){
  return this.loginForm.get('password')
}
  

  onSubmit() {
    console.log("see the username",this.loginForm.get('userName'))
  console.log("see the password",this.loginForm.get('password'))
    // this.router.navigate(['application'])
    //   this.authService.setLoggedIn(true)
    //   console.log("submit clicked")
    // if(this.loginForm.get('username').errors && this.loginForm.get('password').errors)
    // {
    //   return;
    // }

    // if(!this.loginForm.valid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }
// this.router.navigate(['application'])
//       this.authService.setLoggedIn(true)
     

    this.subscription.add(this.authService.login(this.loginForm.get('userName').value,this.loginForm.get('password').value ).subscribe((data) => {
      console.log("see the data",data)
      if(data.responseObject.firstTimeLogin) {
        this.router.navigate(['forgetpassword'])
        
      } else {
        this.authService.setLoggedIn(true)
        this.router.navigate(['application'])
      }
    },(err)=>{console.log("see the error",err)}))
    
  }

  ngOnDestroy() {  
    // Unsubscribed the subscription  
   this.subscription.unsubscribe();  
   }  

}
