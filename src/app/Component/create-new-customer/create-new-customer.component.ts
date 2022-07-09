import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProjectService } from "src/app/Services/project.service";
import { ToasterNotificatonService } from "src/app/Services/toaster.notificaton.service";

@Component({
  selector: "app-create-new-customer",
  templateUrl: "./create-new-customer.component.html",
  styleUrls: ["./create-new-customer.component.css"],
})
export class CreateNewCustomerComponent implements OnInit , OnDestroy {
  customerRegisterForm: FormGroup;
  showEmailValidatiom = false;
  private subscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private _notificationToast:ToasterNotificatonService
  ) {}

  ngOnInit(): void {
    this.customerRegisterForm = this.fb.group({
      customerName: ["", [Validators.required]],
      spocFirstName: ["", [Validators.required]],
      spocLastName: ["", [Validators.required]],
      location: ["", [Validators.required]],
      emailId: ["", [Validators.required, Validators.email]],
      contactNumber: ["", [Validators.required]],
    });
  }

  get customerName() {
    return this.customerRegisterForm.get("customerName");
  }

  get spocFirstName() {
    return this.customerRegisterForm.get("spocFirstName");
  }
  get spocLastName() {
    return this.customerRegisterForm.get("spocLastName");
  }

  get location() {
    return this.customerRegisterForm.get("location");
  }
  get emailId() {
    return this.customerRegisterForm.get("emailId");
  }
  get contactNumber() {
    return this.customerRegisterForm.get("contactNumber");
  }

  onSubmit() {
  

    if(!this.customerRegisterForm.valid) {
      this.customerRegisterForm.markAllAsTouched();
      return;
    }
    
    this.subscription.add(this.projectService.createCustomer(this.customerRegisterForm.value).subscribe((data:any) => {
      console.log("see the data",data)
      if(data.responseCode === 201) {
        this._notificationToast.showSuccess("Customer Created Sucessfully","Created Customer")
        this.customerName.reset('')
        this.spocFirstName.reset('')
        this.spocLastName.reset('')
        this.location.reset('')
        this.emailId.reset('')
        this.contactNumber.reset('')
       
      
        this.router.navigate(['customerListTable'])
      } else {
        this._notificationToast.showSuccess("Customer Creation Failed","Cannot Create Customer")
      }
    },(err)=>{
              console.log("see the error",err)
              if(err instanceof HttpErrorResponse)
              {
                this._notificationToast.showError("Cannot Create Customer",`${err.error.errorMessage}`)
                //this.router.navigate(['login'])
              }else{
              
              this._notificationToast.showError("Cannot Create Customer Now","Cannot Create Customer")
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
