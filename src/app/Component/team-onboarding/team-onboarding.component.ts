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
  readOnly: Boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private _notificationToast: ToasterNotificatonService) {

    this.addTeamMeberForm = this.fb.group({

      addTeamMebers: this.fb.array([]),

    });
    this.registerService.getTeamMembers().subscribe((data) => {
      console.log("see team Members", data)
      this.addTeamMeberForm.setControl('addTeamMebers', this.setExistingTeamMember(data));
      this.readOnly=true
      
      this._notificationToast.showSuccess("Team members Loaded Sucessfully", "Loaded TeamMembers")
    }, (err) => {
      this._notificationToast.showError("Cannot load team member", "Cannot load team members")
    }
    )

  }

  setExistingTeamMember(teamMembers?: any): FormArray {
    const formArray = new FormArray([]);
    teamMembers.forEach(s => {
      formArray.push(this.fb.group({
        name: [s.name,Validators.required],
        role: [s.role,Validators.required],
        email: [s.email,Validators.required],
      }));
    });
    
      

    return formArray;
  }

  ngOnInit(): void {

  }



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
      this.readOnly = true;
      console.log(this.addTeamMeberForm.getRawValue());

    }
  }

  createParticulars(): FormGroup {
    return this.fb.group({

      name: ['', [Validators.required,]],
      role: ['', [Validators.required]],
      email: ['', Validators.required],

    });
  }

  get addTeamMebers(): FormArray {
    return <FormArray>this.addTeamMeberForm.get('addTeamMebers');
  }

  addItem(): void {
    if (this.readOnly) {
      return;
    }
    this.addTeamMebers.push(this.createParticulars());
  }

  onEditItem(): void {

    this.readOnly = false;
    this.addTeamMeberForm.markAsTouched();
    this.addTeamMeberForm.markAsDirty()
    console.log("see the form details",this.addTeamMeberForm)
  }

  onDeleteItem(i) {
    this.addTeamMebers.removeAt(i);
  }

}
