import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

export interface RegisterUser{
userName:String,
firstName:String,
lastName:String,
email:String,
contactNumber:String,
location:String,
roleName:String
}



@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;                   
  private subscription: Subscription = new Subscription();
  submitted = false;
  showEmailValidatiom = false;

  roles = [
    // {
    //   id: '',
    //   name: 'Select any Role'
    // },
    {
      id: 'project_manager',
      name: 'Project Manager'
    },
    {
      id: 'acl_staff',
      name: 'ACL Staff'
    },
    {
      id: 'customer',
      name: 'Customer'
    }
    // ,{
    //   id: 'reviewer',
    //   name: 'Reviewer'
    // }, {
    //   id: 'consultant',
    //   name: 'Consultant'
    // },
    
  ];
  //role='select'
  constructor(private fb: FormBuilder,         
  private router:Router ,private registerService:  RegisterService, private _notificationToast:ToasterNotificatonService) { }
 

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      
      userName: ['',[Validators.required] ],
      firstName: ['',[Validators.required] ],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      contactNumber: ['',[Validators.required]],
      location: ['',[Validators.required]],
      roleName: ["",[Validators.required]],
  });
  //this.registerForm.controls['roleName'].setValue('0');
  console.log(this.registerForm.get('username'))
  console.log(this.registerForm.get('password'))
  }
  
get userName(){
  return this.registerForm.get('userName')
}

get firstName(){
  return this.registerForm.get('firstName')
}
get lastName(){
  return this.registerForm.get('lastName')
}

get email(){
  return this.registerForm.get('email')
}
get contactNumber(){
  return this.registerForm.get('contactNumber')
}

get location(){
  return this.registerForm.get('location')
}
get roleName(){
  return this.registerForm.get('roleName')
}


onSubmit() {
  

  if(!this.registerForm.valid) {
    this.registerForm.markAllAsTouched();
    return;
  }
  // this.subscription.add(this.registerService.create(this.registerForm.get('userName').value,this.registerForm.get('firstName').value,this.registerForm.get('lastName').value,
  // this.registerForm.get('email').value,this.registerForm.get('contactNumber').value,this.registerForm.get('location').value,
  // this.registerForm.get('roleName').value).

  this.subscription.add(this.registerService.create(this.registerForm.value).subscribe((data:any) => {
    console.log("see the data",data)
    if(data.responseCode === 201) {
      this._notificationToast.showSuccess("User Created Sucessfully","Created User")
      this.userName.reset('')
      this.firstName.reset('')
      this.lastName.reset('')
      this.email.reset('')
      this.contactNumber.reset('')
      this.location.reset('')
      this.roleName.reset('')
      //this.registerForm.controls['roleName'].setValue('0');
      this.router.navigate(['userListTable'])
    } else {
      this._notificationToast.showSuccess("User Creation Failed","Cannot Create User")
    }
  },(err)=>{
            console.log("see the error",err)
            if(err instanceof HttpErrorResponse)
            {
              this._notificationToast.showError("Cannot Create User",`${err.error.errorMessage}`)
              //this.router.navigate(['login'])
            }else{
            
            this._notificationToast.showError("Cannot Create User Now","Cannot Create User")
            }
          }))
  
}
onBlurMethod(){
this.showEmailValidatiom =true;
}
ngOnDestroy() {  
  // Unsubscribed the subscription  
 this.subscription.unsubscribe();  
 }  

}
