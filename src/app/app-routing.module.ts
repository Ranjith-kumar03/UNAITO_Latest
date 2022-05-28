import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectOverViewComponent } from './Component/project-overview/project-over-view.component';
import { ApplicationComponent } from './Component/application/application.component';
import { AssessmentProjectplanComponent } from './Component/assessment-projectplan/assessment-projectplan.component';
import { CreateNewProjectComponent } from './Component/create-new-project/create-new-project.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { ProjectDetailsDashboardComponent } from './Component/project-details-dashboard/project-details-dashboard.component';
import { ProjectDetailsDriversComponent } from './Component/project-details-drivers/project-details-drivers.component';
import { ProjectDetailsScopeComponent } from './Component/project-details-scope/project-details-scope.component';
import { ProjectDetailsComponent } from './Component/project-details/project-details.component';
import { ProjectListComponent } from './Component/project-list/project-list.component';
import { TeamOnboardingComponent } from './Component/team-onboarding/team-onboarding.component';
import { EditDriversComponent } from './Component/edit-drivers/edit-drivers.component';


const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:"login" , component:LoginComponent},
  {path:"forgetpassword" , component:ForgetPasswordComponent},
  {path:"application" , component:ApplicationComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"projectlist",component:ProjectListComponent},
  {path:"newproject",component:CreateNewProjectComponent},
  {path:"projectdetailsDashboard/:id", component:ProjectDetailsDashboardComponent},
  {path:"addDrivers", component:ProjectDetailsDriversComponent},
  {path:"editDrivers", component:EditDriversComponent},
  {path:"addScope", component:ProjectDetailsScopeComponent},
  {path:"overview", component:ProjectOverViewComponent},
  {path:"teamonboard", component:TeamOnboardingComponent},
  {path:"assessmentprojectplan", component:AssessmentProjectplanComponent},
  {path:"logout" , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
