import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplicationComponent,
    LogoutComponent,
    SearchComponent,
    NotificationComponent,
    AppListComponent,MenuComponent,ClickOutsideDirective, ProjectListComponent, LeftSideBarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
