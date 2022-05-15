import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './Component/application/application.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:"login" , component:LoginComponent},
  {path:"application" , component:ApplicationComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"logout" , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
