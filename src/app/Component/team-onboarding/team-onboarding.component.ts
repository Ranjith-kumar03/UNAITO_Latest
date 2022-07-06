import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "src/app/Services/register.service";
import { ToasterNotificatonService } from "src/app/Services/toaster.notificaton.service";
import Swal from "sweetalert2";
import generator from "generate-serial-number";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
//var serialNumber = generator.generate(10);

@Component({
  selector: "app-team-onboarding",
  templateUrl: "./team-onboarding.component.html",
  styleUrls: ["./team-onboarding.component.css"],
})
export class TeamOnboardingComponent implements OnInit {
  addTeamMeberForm: FormGroup;
  ShowInputBox: boolean = false;
  projectId: Number;
  memberListTable:any[]
  private subscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _notificationToast: ToasterNotificatonService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params["id"];
    });
  }

  ///loading already existing value from database

  ngOnInit(): void {
    this.addTeamMeberForm = this.fb.group({
      memberName: ["", [Validators.required]],
      userId: ["90"],
      roleId: ["", [Validators.required]],
      email: ["", [Validators.required]],
    });
  }

  get memberName() {
    return this.addTeamMeberForm.get("memberName");
  }

  get userId() {
    return this.addTeamMeberForm.get("userId");
  }

  get roleId() {
    return this.addTeamMeberForm.get("roleId");
  }

  get email() {
    return this.addTeamMeberForm.get("email");
  }

  addItem() {
    this.ShowInputBox = true;
  }
  cancelItem() {
    this.ShowInputBox = false;
  }

  onSave() {
    if (!this.addTeamMeberForm.valid) {
      this.addTeamMeberForm.markAllAsTouched();
      return;
    }
    let data={
   
      "teamMembers":[
         {
          ...this.addTeamMeberForm.value
         }
      ]
   }

    this.subscription.add(
      this.registerService
        .createTeamMember(data, this.projectId)
        .subscribe(
          (data: any) => {
            console.log("see the data", data);
            if (data.responseCode === 201) {
              this.memberListTable=data.responseObject.teamMembers
              this.ShowInputBox=false;
              this._notificationToast.showSuccess(
                "Member Created Sucessfully",
                "Created Member"
              );
              this.memberName.reset("");
              this.userId.reset("");
              this.roleId.reset("");
              this.email.reset("");

              
            } else {
              this._notificationToast.showSuccess(
                "Member Creation Failed",
                "Cannot Create Member"
              );
            }
          },
          (err) => {
            console.log("see the error", err);
            if (err instanceof HttpErrorResponse) {
              this._notificationToast.showError(
                "Cannot Create Member",
                `${err.error.errorMessage}`
              );
              //this.router.navigate(['login'])
            } else {
              this._notificationToast.showError(
                "Cannot Create Member Now",
                "Cannot Create Member"
              );
            }
          }
        )
    );
  }
}
