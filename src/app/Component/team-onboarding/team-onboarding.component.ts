import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-onboarding',
  templateUrl: './team-onboarding.component.html',
  styleUrls: ['./team-onboarding.component.css']
})
export class TeamOnboardingComponent implements OnInit {
  addTeamMeberForm: FormGroup;
  readOnly:Boolean =false;

  constructor(private fb: FormBuilder) {

    this.addTeamMeberForm = this.fb.group({

      addTeamMebers: this.fb.array([]),

    });


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
      this.readOnly =true;
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
    if(this.readOnly)
    {
      return;
    }
    this.addTeamMebers.push(this.createParticulars());
  }

  onEditItem(): void {
    // console.log(itemIndex);
    //   var itemArr = String(itemIndex)

    // const myForm = (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(itemIndex);
    // //let currentVal = !myForm.value.toggle;
    // console.log("Before=>", myForm);
    // myForm.patchValue({
    //   name:"test123",
    //   role:'Manager',
    //   email:"testemail"
    // });
    this.readOnly=false;
    
  }

  onDeleteItem(i){
    this.addTeamMebers.removeAt(i);
  }

}
