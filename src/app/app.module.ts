import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ApplicationComponent } from './Component/application/application.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './Component/logout/logout.component';
import { MenuComponent } from './Component/menu/menu.component';
import { SearchComponent } from './Component/search/search.component';
import { NotificationComponent } from './Component/notification/notification.component';
import { AppListComponent } from './Component/app-list/app-list.component';
import { ClickOutsideDirective } from './Directives/ClickOutsideDirective';
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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplicationComponent,
    LogoutComponent,
    SearchComponent,
    NotificationComponent,
    AppListComponent,MenuComponent,ClickOutsideDirective, ProjectListComponent, LeftSideBarComponent, CreateNewProjectComponent, CloudReadinessAssessmentComponent, ProjectListTableComponent, ProjectDetailsComponent, ProjectDetailsLeftMenuComponent, ProjectDetailsDashboardComponent, ProjectDetailsDriversComponent, ProjectDetailsScopeComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
