import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './Component/application/application.component';
import { CreateNewProjectComponent } from './Component/create-new-project/create-new-project.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { ProjectListComponent } from './Component/project-list/project-list.component';


const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:"login" , component:LoginComponent},
  {path:"application" , component:ApplicationComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"projectlist",component:ProjectListComponent},
  {path:"newproject",component:CreateNewProjectComponent},
  {path:"logout" , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
