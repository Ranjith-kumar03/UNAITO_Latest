import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../Component/create-new-user/create-new-user.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  create(registerUser:RegisterUser) {
    return this.http.post<RegisterUser>(environment.API_REGISTER_URL,{...registerUser}); 
    // {headers:new HttpHeaders({
    //   "API-KEY":"USER-API-KEY"
    // })}
}

update(updateUser: RegisterUser) {
    return this.http.put(environment.API_REGISTER_URL ,updateUser);
}
}
