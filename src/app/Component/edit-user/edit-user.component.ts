import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  editUserForm: FormGroup;                   
  private subscription: Subscription = new Subscription();
  submitted = false;
  
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
    ,{
      id: 'reviewer',
      name: 'Reviewer'
    }, {
      id: 'consultant',
      name: 'Consultant'
    },
    
  ];
  //role='select'
  roleValue;
  constructor(private fb: FormBuilder,         
  private router:Router ,private registerService:  RegisterService,private activatedRoute: ActivatedRoute, private _notificationToast:ToasterNotificatonService) { }
 

  ngOnInit(): void {

    this.editUserForm = this.fb.group({
      
      userName: ['',[Validators.required] ],
      firstName: ['',[Validators.required] ],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      contactNumber: ['',[Validators.required]],
      location: ['',[Validators.required]],
      roleName: ["",[Validators.required]],
  });
  //this.registerForm.controls['roleName'].setValue('0');
  
  this.activatedRoute.params.subscribe(params => {
    let id = params['id'];
this.registerService.getOneUser(id).subscribe((user)=>{
  this.editUserForm.setValue({
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    contactNumber: user.contactNumber,
    location:user.location,
    roleName: user.roleName
  })
  this.roleValue = user.roleName
  console.log("see the updated value", this.editUserForm.value)
},(err)=>{
  this._notificationToast.showError(JSON.stringify(err),"Cannot find the User")

})
    
  });
  }
  
get userName(){
  return this.editUserForm.get('userName')
}

get firstName(){
  return this.editUserForm.get('firstName')
}
get lastName(){
  return this.editUserForm.get('lastName')
}

get email(){
  return this.editUserForm.get('email')
}
get contactNumber(){
  return this.editUserForm.get('contactNumber')
}

get location(){
  return this.editUserForm.get('location')
}
get roleName(){
  return this.editUserForm.get('roleName')
}


onSubmit() {
  

  if(!this.editUserForm.valid) {
    this.editUserForm.markAllAsTouched();
    return;
  }
  // this.subscription.add(this.registerService.create(this.registerForm.get('userName').value,this.registerForm.get('firstName').value,this.registerForm.get('lastName').value,
  // this.registerForm.get('email').value,this.registerForm.get('contactNumber').value,this.registerForm.get('location').value,
  // this.registerForm.get('roleName').value).

  this.subscription.add(this.registerService.updateUser(this.activatedRoute.snapshot.params.id,this.editUserForm.value).subscribe((data:any) => {
    console.log("see the data",data)
    if(true) {
      this._notificationToast.showSuccess("User Updated Sucessfully","UpdatedUser")
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
      this._notificationToast.showError("User Updation Failed","Cannot CUpdate User")
    }
  },(err)=>{
            console.log("see the error",err)
            if(err instanceof HttpErrorResponse)
            {
              this._notificationToast.showError(JSON.stringify(err),"Cannot Update User ")
              
            }
            
            this._notificationToast.showError(JSON.stringify(err),"Cannot Create User")
          }))
  
}
ngOnDestroy() {  
  // Unsubscribed the subscription  
 this.subscription.unsubscribe();  
 }  

}
