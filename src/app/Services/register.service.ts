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
  updateUser(id:number,updateUser: RegisterUser) {
    return this.http.put<RegisterUser>(environment.API_UPDATEUSER_URL+id, { ...updateUser });
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
  }
  getAllUsers()
  {
    return this.http.get<RegisterUser>(environment.API_GETALLUSERS_URL);
  }

  getOneUser(id: number) {
    return this.http.get<any>(environment.API_GETUSERBYID_URL+id);
  }

  delete(id: number) {
    return this.http.delete<any>(environment.API_USERDELETE_URL + id);
  }
}
