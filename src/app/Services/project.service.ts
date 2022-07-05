import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  addDriverstobackend(project_id:any,add_drivers: any)
  {
    return this.http.post<any>(environment.API_ADD_DRIVERS_URL+ project_id+"/add_drivers", { add_drivers });
  }

  addScopestobackend(project_id:any,add_scope: any)
  {
    return this.http.post<any>(environment.API_SCOPE_DRIVERS_URL+ project_id+"/add-scope", { add_scope });
  }

  /// Create Customer
  createCustomer(newCustomer: any)
  {
    return this.http.post<any>(environment.API_CREATE_NEWCUSTOMER, { ...newCustomer })
  }

  ///Create Project
  createProject(newProject: any)
  {
    return this.http.post<any>(environment.API_CREATE_NEWPROJECT, { ...newProject })
  }
}
