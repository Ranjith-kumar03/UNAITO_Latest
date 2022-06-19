import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.forgetPasswordForm = this.fb.group({
      userName: ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(params => {
      let emailId = params['emailId'];

      this.forgetPasswordForm.get('userName').setValue(emailId);
      console.log(`See the passed user Id, ${emailId}`);
    });

  }

  get userName() {
    return this.forgetPasswordForm.get('userName')
  }
  onSubmit() {
  }
}


