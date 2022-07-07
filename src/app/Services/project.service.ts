import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  addDriversurl:String;
  addScopesUrl:String

  constructor(private http: HttpClient) { }

  addDriverstobackend(project_id:any,add_drivers: any)
  {
    //add hard copy opf 4 for project_id    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addDriversurl=environment.API_ADD_DRIVERS_URL+2+"/add-drivers"
    return this.http.post<any>(environment.API_ADD_DRIVERS_URL+2+"/add-drivers",{add_drivers},{headers: headers});
  }

  addScopestobackend(project_id:any,add_scope: any)
  {
    //add hard copy opf 4 for project_id
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addScopesUrl=environment.API_SCOPE_DRIVERS_URL+2+"/add-scope"
    return this.http.post<any>(environment.API_SCOPE_DRIVERS_URL+2+"/add-scope", { ...add_scope },{headers: headers});
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
