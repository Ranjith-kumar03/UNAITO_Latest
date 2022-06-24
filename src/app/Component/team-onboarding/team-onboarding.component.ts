import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-team-onboarding',
  templateUrl: './team-onboarding.component.html',
  styleUrls: ['./team-onboarding.component.css']
})
export class TeamOnboardingComponent implements OnInit {
  addTeamMeberForm: FormGroup;
  buttonText:String = "Edit"
  defautltButtonText:String = "Edit"
  canEdit:Number
  showSubmitButton:boolean = false;
   
  constructor(private fb: FormBuilder, private registerService: RegisterService, private _notificationToast: ToasterNotificatonService) {

    this.addTeamMeberForm = this.fb.group({

      addTeamMebers: this.fb.array([]),

    });
    this.registerService.getTeamMembers().subscribe((data) => {
      console.log("see team Members", data)
      this.addTeamMeberForm.setControl('addTeamMebers', this.setExistingTeamMember(data));
      this.addTeamMeberForm.get("addTeamMebers").disable()

      this._notificationToast.showSuccess("Team members Loaded Sucessfully", "Loaded TeamMembers")
    }, (err) => {
      this._notificationToast.showError("Cannot load team member", "Cannot load team members")
    }
    )

  }
  ///loading already existing value from database
  setExistingTeamMember(teamMembers?: any): FormArray {
    const formArray = new FormArray([]);
    teamMembers.forEach(s => {
      console.log("see the s",s)
      console.log("see the s inside value",s.addTeamMebers[0].name)
      formArray.push(this.fb.group({
        // id: [this.ID()],
        name: [s.addTeamMebers[0].name, [Validators.required]],
        role: [s.addTeamMebers[0].role, [Validators.required]],
        email: [s.addTeamMebers[0].email, [Validators.required]],
      }));
    });
    return formArray;
  }

  ngOnInit(): void {

  }


 
  ///Create a new Form Group or a Team Member
  createParticulars(): FormGroup {
    
    return this.fb.group({
      //  id: [this.ID()],
      name: ['', [Validators.required,]],
      role: ['', [Validators.required]],
      email: ['', Validators.required],

    });
  }
  


  get addTeamMebers(): FormArray {
    return <FormArray>this.addTeamMeberForm.get('addTeamMebers');
  }

  addItem(): void {
   
    this.addTeamMebers.push(this.createParticulars());
    this.showSubmitButton=true
  }

   //on submit click
   onSave(): void {
    console.log(this.addTeamMeberForm);

    if (!this.addTeamMeberForm.valid) {
      this.addTeamMeberForm.markAllAsTouched();
      return;
    }
    if (this.addTeamMeberForm.invalid) {
      return;
    }
    if (!this.addTeamMeberForm.invalid) {
      // Save the form
     
      console.log(this.addTeamMeberForm.getRawValue());
      this.registerService.createTeamMember(this.addTeamMeberForm.value).subscribe((data) => {
        console.log("see team Members", data)
        this.addTeamMeberForm.get("addTeamMebers").disable()
  
        this._notificationToast.showSuccess("Team members Loaded Sucessfully", "Loaded TeamMembers")
      }, (err) => {
        this._notificationToast.showError("Cannot load team member", "Cannot load team members")
      }
      )
      this.addTeamMeberForm.get("addTeamMebers").disable()
    }
  }



  onEditOne(element:any,index: number) {
    //https://stackblitz.com/edit/angular-form-array-enable-disable?file=src%2Fapp%2Fapp.component.ts
    console.log("see the button text",element)
    this.canEdit=index;
    if(this.buttonText==="Edit"){
      this.showSubmitButton=false;
    (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('name').enable();
    (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('email').enable();
    (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('role').enable();
    this.buttonText="Update"
    }else if(this.buttonText==="Update"){
      this.onEditOneItem(index)
    }

  }
  onEditOneItem(index: number) {
    //https://stackblitz.com/edit/angular-form-array-example-update-value-9xrlbv?file=src%2Fapp%2Fapp.component.html
    const myForm = (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index);
   
    let currentVal = !myForm.value.toggle;
    console.log("values before", myForm.get('name').value);
    console.log("values  before", myForm.get('role').value);
    console.log("values before", myForm.get('email').value);
    myForm.patchValue({
      name: myForm.get('name').value,
      role: myForm.get('role').value,
      email: myForm.get('email').value,
    });
    // this.hideArray[index] = currentVal;
    // console.log("=>", myForm, myForm.value.toggle);
    this.registerService.updateOneTeamMember(index, myForm.value).subscribe((data) => {

      (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).disable();
      this._notificationToast.showSuccess("Team members Updated Sucessfully", "UpadtedTeamMembers")
    }, (err) => {
      this._notificationToast.showError("Cannot Update team member", "Cannot Update team members")
    }
    )

    console.log("values after", myForm.get('name').value);
    console.log("values after", myForm.get('role').value);
    console.log("values after", myForm.get('email').value);
    this.buttonText==="Edit"
    this.showSubmitButton=true;
  }

  onDeleteItem(i) {
    this.addTeamMebers.removeAt(i);
  }

}
