import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../Component/create-new-user/create-new-user.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  create(registerUser: RegisterUser) {
    return this.http.post<RegisterUser>(environment.API_REGISTER_URL, { ...registerUser });
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }
  getAllUsers() {
    return this.http.get<RegisterUser>(environment.API_GETALLUSERS_URL);
  }

  getOneUser(userName: String) {
    return this.http.get<any>(environment.API_GETUSERBYID_URL + userName);
  }

  updateUser(updateUser: RegisterUser) {
    return this.http.put<RegisterUser>(environment.API_USEREDIT_URL, { ...updateUser });
    {
      headers: new HttpHeaders({
        "API-KEY": "USER-API-KEY"
      })
    }
  }

  delete(userName: String) {
    return this.http.delete<any>(environment.API_USERDELETE_URL + userName);
  }

  ///Team On Boarding
  getTeamMembers() {
    return this.http.get<any>(environment.API_GET_TEAM_MEMBERS);
  }
  updateOneTeamMember(i: number, update: any) {
    return this.http.patch<any>(environment.API_UPDATE_ONE_TEAM_MEMBERS + i, { ...update });
  }
  createTeamMember(newMember: any) {
    return this.http.post<any>(environment.API_ADD_TEAM_MEMBERS, { ...newMember });
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }
  deleteTeamMember(index: number) {
    return this.http.delete<any>(environment.API_DELETE_TEAM_MEMBERS + index)
  }
}
