import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';
import Swal from 'sweetalert2'
import generator  from 'generate-serial-number';
//var serialNumber = generator.generate(10); 

@Component({
  selector: 'app-team-onboarding',
  templateUrl: './team-onboarding.component.html',
  styleUrls: ['./team-onboarding.component.css']
})
export class TeamOnboardingComponent implements OnInit {
  addTeamMeberForm: FormGroup;
  buttonText: String = "Edit"
  defautltButtonText: String = "Edit"
  canEdit: Number
  showSubmitButton: boolean = false;
  addMemberButtonStatus = true;
  disableDeleteandSaveButtonStatus = true;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private _notificationToast: ToasterNotificatonService) {

    this.addTeamMeberForm = this.fb.group({

      addTeamMebers: this.fb.array([]),

    });
    this.getAllTeamMembers()

  }
  getAllTeamMembers() {
    this.registerService.getTeamMembers().subscribe((data) => {
      console.log("see team Members", data)
      this.addTeamMeberForm.setControl('addTeamMebers', this.setExistingTeamMember(data));
      this.addTeamMeberForm.get("addTeamMebers").disable()

      // this._notificationToast.showSuccess("Team members Loaded Sucessfully", "Loaded TeamMembers")
    }, (err) => {
      this._notificationToast.showError("Cannot load team member", "Cannot load team members")
    }
    )
  }

  ///loading already existing value from database
  setExistingTeamMember(teamMembers?: any): FormArray {
    const formArray = new FormArray([]);
    teamMembers.forEach(s => {
      console.log("see the s", s)
      console.log("see the s inside value", s.name)
      formArray.push(this.fb.group({
         id: [s.id],
        name: [s.name, [Validators.required]],
        role: [s.role, [Validators.required]],
        email: [s.email, [Validators.required]],
      }));
    });
    return formArray;
  }

  ngOnInit(): void {

  }



  ///Create a new Form Group or a Team Member
  createParticulars(): FormGroup {

    return this.fb.group({
       id: [generator.generate(10)],
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
    this.showSubmitButton = true
    this.addMemberButtonStatus = false;
    this.disableDeleteandSaveButtonStatus = false;
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
      console.log("see the raw value", this.addTeamMebers)
      console.log(" see the pushed value", this.createParticulars().value)
      console.log("see the array filtrerd value", this.addTeamMeberForm.value.addTeamMebers[0])
      this.registerService.createTeamMember(this.addTeamMeberForm.value.addTeamMebers[0]).subscribe((data) => {
        console.log("see team Members", data)
        this.addTeamMeberForm.get("addTeamMebers").disable()

        this._notificationToast.showSuccess("Team members Loaded Sucessfully", "Loaded TeamMembers")
      }, (err) => {
        this._notificationToast.showError("Cannot load team member", "Cannot load team members")
      }
      )
      this.addTeamMeberForm.get("addTeamMebers").disable()
    }
    this.showSubmitButton = false
    this.addMemberButtonStatus = true;
    this.disableDeleteandSaveButtonStatus = true;
  }



  onEditOne( index: number, id:any) {
    //https://stackblitz.com/edit/angular-form-array-enable-disable?file=src%2Fapp%2Fapp.component.ts
    
    this.canEdit = index;
    if (this.buttonText === "Edit") {
      this.showSubmitButton = false;
      (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('name').enable();
      (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('email').enable();
      (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).get('role').enable();
      this.buttonText = "Update"
    } else if (this.buttonText === "Update") {
      this.onEditOneItem(index,id)
    }

  }
  onEditOneItem(index: number, id:any) {
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
    this.registerService.updateOneTeamMember(id, myForm.value).subscribe((data) => {
      this.buttonText = "Edit";
      (<FormArray>this.addTeamMeberForm.get("addTeamMebers")).at(index).disable();
      this._notificationToast.showSuccess("Team members Updated Sucessfully", "UpadtedTeamMembers")
    }, (err) => {
      this._notificationToast.showError("Cannot Update team member", "Cannot Update team members")
    }
    )

    console.log("values after", myForm.get('name').value);
    console.log("values after", myForm.get('role').value);
    console.log("values after", myForm.get('email').value);
    

  }

  onDeleteItem(id:any) {
    //https://sweetalert2.github.io/#examples
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerService.deleteTeamMember(id).subscribe((data) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getAllTeamMembers()
        }, (err) => {
          this._notificationToast.showError("Cannot Delete team member", "Cannot Delete team members")
        })

      }
    })

  }

}
