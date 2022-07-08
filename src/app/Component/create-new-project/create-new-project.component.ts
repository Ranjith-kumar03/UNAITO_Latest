import { DatePipe, formatDate } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProjectService } from "src/app/Services/project.service";
import { ToasterNotificatonService } from "src/app/Services/toaster.notificaton.service";


@Component({
  selector: "app-create-new-project",
  templateUrl: "./create-new-project.component.html",
  styleUrls: ["./create-new-project.component.css"],
})
export class CreateNewProjectComponent implements OnInit {
  projectRegisterForm: FormGroup;
  private subscription: Subscription = new Subscription();
  todayDate:any
 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private _notificationToast: ToasterNotificatonService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.projectRegisterForm = this.fb.group({
      customerName: ["", [Validators.required]],
      projectName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
    });
  }

  validation(event?: any) {
    this.todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    if (this.startDate && this.endDate) {
      console.log("see the start and end date", this.startDate, this.endDate);
      let startdate = new Date(this.projectRegisterForm.get("startDate").value);
      let enddate = new Date(this.projectRegisterForm.get("endDate").value);
      if (startdate.getTime() < enddate.getTime()) {
        this.projectRegisterForm
          .get("duration")
          .setValue(this.weeksBetween(startdate.getTime(), enddate.getTime()));
        return false;
      } else return true;
    }
  }

  get customerName() {
    return this.projectRegisterForm.get("customerName");
  }

  get projectName() {
    return this.projectRegisterForm.get("projectName");
  }
  get description() {
    return this.projectRegisterForm.get("description");
  }

  get startDate() {
    return this.projectRegisterForm.get("startDate");
  }
  get endDate() {
    return this.projectRegisterForm.get("endDate");
  }
  get duration() {
    return this.projectRegisterForm.get("duration");
  }

  weeksBetween(d1, d2) {
    let noOfdays = d2 - d1;
    const diffInDays = noOfdays / (1000 * 60 * 60 * 24);
    let weeks = Math.round(diffInDays / 7);
    let days = diffInDays % 7;

    return `${weeks + " weeks & " + days + " days"}`;
  }
  onSubmit() {
    if (!this.projectRegisterForm.valid || this.validation()) {
      this.projectRegisterForm.markAllAsTouched();
      return;
    }

    this.subscription.add(
      this.projectService
        .createProject(this.projectRegisterForm.value)
        .subscribe(
          (data: any) => {
            console.log("see the data", data);
            if (data.responseCode === 201) {
              this._notificationToast.showSuccess(
                "Project Created Sucessfully",
                "Created Project"
              );
              this.customerName.reset("");
              this.projectName.reset("");
              this.description.reset("");
              this.startDate.reset("");
              this.endDate.reset("");
              this.duration.reset("");

              this.router.navigate(["projectlist"]);
            } else {
              this._notificationToast.showSuccess(
                "Project Creation Failed",
                "Cannot Create Project"
              );
            }
          },
          (err) => {
            console.log("see the error", err);
            if (err instanceof HttpErrorResponse) {
              this._notificationToast.showError(
                "Cannot Create Project",
                `${err.error.errorMessage}`
              );
              //this.router.navigate(['login'])
            } else {
              this._notificationToast.showError(
                "Cannot Create Project Now",
                "Cannot Create Project"
              );
            }
          }
        )
    );
  }

  ngOnDestroy() {
    // Unsubscribed the subscription
    this.subscription.unsubscribe();
  }
}
