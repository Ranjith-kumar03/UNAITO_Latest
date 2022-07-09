import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  addTeamMemberurl:String;
  addDriversurl:String;
  addScopesUrl:String

  constructor(private http: HttpClient) { }

    /// Create Customer
  createCustomer(newCustomer: any)
  {
    return this.http.post<any>(environment.API_CREATE_NEWCUSTOMER, { ...newCustomer })
  }

  getAllCustomers()
  {
    return this.http.get<any>(environment.API_GET_ALL_CUSTOMERS);
  }

  getCustomerById(customerId:number)
  {
    return this.http.get<any>(environment.API_GET_CUSTOMER_BY_ID+customerId);
  }

  ///Create Project
  createProject(newProject: any)
  {
    return this.http.post<any>(environment.API_CREATE_NEWPROJECT, { ...newProject })
  }

  getAllProjects()
  {
    return this.http.get<any>(environment.API_GET_ALL_PROJECTS);
  }

  getProjectById(projectId:number)
  {
    return this.http.get<any>(environment.API_GET_PROJECT_BY_ID+projectId);
  }
 // Add Drivers and Scope to Project
  addDriverstobackend(project_id:any,add_drivers: any)
  {
    //add hard copy opf 4 for project_id    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addDriversurl=environment.API_ADD_DRIVERS_URL+project_id+"/add-drivers"
    return this.http.post<any>(environment.API_ADD_DRIVERS_URL+project_id+"/add-drivers",{add_drivers},{headers: headers});
  }

  addScopestobackend(project_id:any,add_scope: any)
  {
    //add hard copy opf 4 for project_id
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addScopesUrl=environment.API_SCOPE_DRIVERS_URL+project_id+"/add-scope"
    return this.http.post<any>(environment.API_SCOPE_DRIVERS_URL+project_id+"/add-scope", { ...add_scope },{headers: headers});
  }

   ///Team On Boarding
  // getTeamMembers() {
  //   return this.http.get<any>(environment.API_GET_TEAM_MEMBERS);
  // }
  // updateOneTeamMember(i: number, update: any) {
  //   return this.http.patch<any>(environment.API_UPDATE_ONE_TEAM_MEMBERS + i, { ...update });
  // }
  createTeamMember(newMember: any,project_id:any,) {
    //add hard copy opf 4 for project_id    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.addTeamMemberurl=environment.API_ADD_TEAM_MEMBERS+1+"/team-onboarding/add-team-member"
    return this.http.post<any>(environment.API_ADD_TEAM_MEMBERS+1+"/team-onboarding/add-team-member", { ...newMember },{headers: headers});
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }
  // deleteTeamMember(index: number) {
  //   return this.http.delete<any>(environment.API_DELETE_TEAM_MEMBERS + index)
  // }
}
