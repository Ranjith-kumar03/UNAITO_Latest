import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ToasterNotificatonService } from 'src/app/Services/toaster.notificaton.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private _notificationToast: ToasterNotificatonService, private router: Router) { }

  ngOnInit(): void {
    let userName = localStorage.getItem("userName")
    this.authService.logout(userName).subscribe((data) => {
      if (data.responseCode === 200)
        this.authService.resetcredentials()
      this.router.navigate(['/login']);
    }, (err) => {
      this._notificationToast.showError(`User Log Out Failed `, "Log Out Failed")
    });
  }

}
