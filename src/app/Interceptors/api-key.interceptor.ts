import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProjectService } from "../Services/project.service";
import { RegisterService } from "../Services/register.service";

@Injectable()
export class APIKEYInterceptor implements HttpInterceptor {
  constructor(private projectService: ProjectService, private registerService: RegisterService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("see the url from interceptor", request.url)
    console.log("see the  driver string ",this.projectService.addDriversurl)
    if (request.url === environment.API_CREATE_NEWCUSTOMER) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "CUSTOMER-API-KEY"),
      });
      return next.handle(API_KEY_Request);
    } else if (request.url === environment.API_CREATE_NEWPROJECT ) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "PROJECT-API-KEY"),
      });
      return next.handle(API_KEY_Request);
    }  else if (request.url ===  this.projectService.addDriversurl ) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "PROJECT-API-KEY"),
      });
      this.projectService.addDriversurl=""
      return next.handle(API_KEY_Request);
    }  else if (request.url ===  this.projectService.addScopesUrl ) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "PROJECT-API-KEY"),
      });
      this.projectService.addScopesUrl=""
      return next.handle(API_KEY_Request);
    }   else if (request.url ===  this.registerService.addTeamMemberurl ) {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "PROJECT-API-KEY"),
      });
      this.registerService.addTeamMemberurl=""
      return next.handle(API_KEY_Request);
    }
    
    else {
      let API_KEY_Request = request.clone({
        headers: request.headers.append("API-KEY", "USER-API-KEY"),
      });
      return next.handle(API_KEY_Request);
    }
  }
}
