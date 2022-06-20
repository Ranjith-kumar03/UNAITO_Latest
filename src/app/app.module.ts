import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ApplicationComponent } from './Component/application/application.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './Component/logout/logout.component';
import { MenuComponent } from './Component/menu/menu.component';
import { SearchComponent } from './Component/search/search.component';
import { NotificationComponent } from './Component/notification/notification.component';
import { AppListComponent } from './Component/app-list/app-list.component';
//import { ClickOutsideDirective } from './Directives/ClickOutsideDirective';
import { ProjectListComponent } from './Component/project-list/project-list.component';
import { LeftSideBarComponent } from './Component/left-side-bar/left-side-bar.component';
import { CreateNewProjectComponent } from './Component/create-new-project/create-new-project.component';
import { CloudReadinessAssessmentComponent } from './Component/cloud-readiness-assessment/cloud-readiness-assessment.component';
import { ProjectListTableComponent } from './Component/project-list-table/project-list-table.component';
import { ProjectDetailsComponent } from './Component/project-details/project-details.component';
import { ProjectDetailsLeftMenuComponent } from './Component/project-details-left-menu/project-details-left-menu.component';
import { ProjectDetailsDashboardComponent } from './Component/project-details-dashboard/project-details-dashboard.component';
import { ProjectDetailsDriversComponent } from './Component/project-details-drivers/project-details-drivers.component';
import { ProjectDetailsScopeComponent } from './Component/project-details-scope/project-details-scope.component';
import { AdministrationComponent } from './Component/administration/administration.component';
import { ProjectOverViewComponent } from './Component/project-overview/project-over-view.component';
import { TeamOnboardingComponent } from './Component/team-onboarding/team-onboarding.component';
import { AssessmentProjectplanComponent } from './Component/assessment-projectplan/assessment-projectplan.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
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
import { UserManagementComponent } from './Component/user-management/user-management.component';

import { CreateNewUserComponent } from './Component/create-new-user/create-new-user.component';
import { UserListComponent } from './Component/user-list/user-list.component';
import { CustomerManagementComponent } from './Component/customer-management/customer-management.component';
import { CustomerListComponent } from './Component/customer-list/customer-list.component';
import { CreateNewCustomerComponent } from './Component/create-new-customer/create-new-customer.component';
import { InformationValidationComponent } from './Component/information-validation/information-validation.component';
import { APIKEYInterceptor } from './Interceptors/api-key.interceptor';
import { LoaderBusyComponent } from './Loader/loader-busy/loader-busy.component';
import { LoaderInterceptor } from './Interceptors/loader.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { ConfirmPasswordComponent } from './Component/confirm-password/confirm-password.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplicationComponent,
    LogoutComponent,
    SearchComponent,
    NotificationComponent,
    AppListComponent,MenuComponent, ProjectListComponent, LeftSideBarComponent,
     CreateNewProjectComponent, CloudReadinessAssessmentComponent, ProjectListTableComponent, 
     ProjectDetailsComponent, ProjectDetailsLeftMenuComponent, ProjectDetailsDashboardComponent, 
     ProjectDetailsDriversComponent, ProjectDetailsScopeComponent, AdministrationComponent, ProjectOverViewComponent, 
     TeamOnboardingComponent, AssessmentProjectplanComponent, ForgetPasswordComponent, EditDriversComponent, AddApplicationOverviewComponent, 
     AddApplicationOverviewDetailsComponent, ServersComponent, StorageComponent, ApplicationLayerComponent, AddApplicationLayerComponent, 
     IntegrationsComponent, AddWebserverComponent, ApllicationServerComponent, DatabaseServerComponent, 
     AddStorageComponent, SecurityComplianceComponent, AddSecurCompiComponent, UserManagementComponent, UserListComponent, 
     CreateNewUserComponent, CustomerManagementComponent, CustomerListComponent, CreateNewCustomerComponent, InformationValidationComponent, LoaderBusyComponent, ConfirmPasswordComponent, ErrorPageComponent, 
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,FormsModule,ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:APIKEYInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
