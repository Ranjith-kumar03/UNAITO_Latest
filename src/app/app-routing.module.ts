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
import { AddApplicationOverviewComponent } from './Component/add-application-overview/add-application-overview.component';
import { AddApplicationOverviewDetailsComponent } from './Component/add-application-overview-details/add-application-overview-details.component';
import { ServersComponent } from './Component/servers/servers.component';
import { StorageComponent } from './Component/storage/storage.component';
import { ApplicationLayerComponent } from './Component/application-layer/application-layer.component';
import { AddApplicationLayerComponent } from './Component/add-application-layer/add-application-layer.component';
import { IntegrationsComponent } from './Component/integrations/integrations.component';
import { AddWebserverComponent } from './Component/add-webserver/add-webserver.component';
import { ApllicationServerComponent } from './Component/apllication-server/apllication-server.component';
import { DatabaseServerComponent } from './Component/database-server/database-server.component';
import { AddStorageComponent } from './Component/add-storage/add-storage.component';
import { SecurityComplianceComponent } from './Component/security-compliance/security-compliance.component';
import { AddSecurCompiComponent } from './Component/add-secur-compi/add-secur-compi.component';
import { AdministrationComponent } from './Component/administration/administration.component';
import { UserManagementComponent } from './Component/user-management/user-management.component';
import { CreateNewUserComponent } from './Component/create-new-user/create-new-user.component';
import { CustomerManagementComponent } from './Component/customer-management/customer-management.component';
import { CreateNewCustomerComponent } from './Component/create-new-customer/create-new-customer.component';
import { InformationValidationComponent } from './Component/information-validation/information-validation.component';
import { AuthGuard } from './Guards/auth-guard';
import { ConfirmPasswordComponent } from './Component/confirm-password/confirm-password.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginComponent },
  { path: "forgetpassword/:emailId", component: ForgetPasswordComponent },
  { path: "confirmpassword/:emailId", component: ConfirmPasswordComponent },
  { path: "application", component: ApplicationComponent ,canActivate:[AuthGuard]},
  { path: "dashboard", component: DashboardComponent ,canActivate:[AuthGuard]},
  { path: "projectlist", component: ProjectListComponent ,canActivate:[AuthGuard]},
  { path: "newproject", component: CreateNewProjectComponent ,canActivate:[AuthGuard]},
  { path: "projectdetailsDashboard/:id", component: ProjectDetailsDashboardComponent ,canActivate:[AuthGuard]},
  { path: "addDrivers", component: ProjectDetailsDriversComponent, canActivate:[AuthGuard] },
  { path: "editDrivers", component: EditDriversComponent ,canActivate:[AuthGuard] },
  { path: "addScope", component: ProjectDetailsScopeComponent ,canActivate:[AuthGuard] },
  { path: "overview", component: ProjectOverViewComponent ,canActivate:[AuthGuard] },
  { path: "teamonboard", component: TeamOnboardingComponent ,canActivate:[AuthGuard] },
  { path: "assessmentprojectplan", component: AssessmentProjectplanComponent ,canActivate:[AuthGuard]},
  { path: "addAppOverview", component: AddApplicationOverviewComponent ,canActivate:[AuthGuard]},
  { path: "addAppOverviewdetails", component: AddApplicationOverviewDetailsComponent ,canActivate:[AuthGuard]},
  { path: "server", component: ServersComponent ,canActivate:[AuthGuard]},
  { path: "addWebServer", component: AddWebserverComponent ,canActivate:[AuthGuard]},
  { path: "addappServer", component: ApllicationServerComponent ,canActivate:[AuthGuard] },
  { path: 'adddatbaseserver', component: DatabaseServerComponent ,canActivate:[AuthGuard]},
  { path: "storage", component: StorageComponent ,canActivate:[AuthGuard] },
  { path: "addstorage", component: AddStorageComponent ,canActivate:[AuthGuard]},
  { path: "applicationLayer", component: ApplicationLayerComponent ,canActivate:[AuthGuard] },
  { path: "addApplicationLayerDetails", component: AddApplicationLayerComponent ,canActivate:[AuthGuard] },
  { path: "addIntegration", component: IntegrationsComponent ,canActivate:[AuthGuard] },
  { path: "securityCompliance", component: SecurityComplianceComponent ,canActivate:[AuthGuard]},
  { path: "addSecurCompi", component: AddSecurCompiComponent ,canActivate:[AuthGuard]},
  { path: "administration", component: AdministrationComponent ,canActivate:[AuthGuard]},
  {path:"userListTable", component: UserManagementComponent ,canActivate:[AuthGuard]},
  {path:"newUser",component:CreateNewUserComponent ,canActivate:[AuthGuard]},
  {path:"editUser/:userName",component:EditUserComponent ,canActivate:[AuthGuard]},
  {path:"customerListTable",component:CustomerManagementComponent ,canActivate:[AuthGuard]},
  {path:"newCustomer",component:CreateNewCustomerComponent ,canActivate:[AuthGuard]},
  {path:"informationValidation", component:InformationValidationComponent ,canActivate:[AuthGuard]},
    { path: "logout", component: LogoutComponent ,canActivate:[AuthGuard]},
    { path: "**", component: ErrorPageComponent },
    { path: "error", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
