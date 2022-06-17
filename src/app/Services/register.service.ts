import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../Component/create-new-user/create-new-user.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  create(userName: String, firstName:String,lastName:String,email:String,contactNumber:String,location:String,roleName:String) {
    return this.http.post<any>(environment.API_REGISTER_URL,{userName,firstName,lastName,email,contactNumber,location,roleName}); 
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
}

update(updateUser: RegisterUser) {
    return this.http.put(environment.API_REGISTER_URL ,updateUser);
}
}
