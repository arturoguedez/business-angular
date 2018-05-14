import { Component, OnInit } from '@angular/core';
import { SignupService } from '../_services/signup.service';
import { SignupForm } from '../_classes/signup-form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: SignupForm;

  companyNameInputFocus: boolean;
  emailInputFocus: boolean;
  passwordInputFocus: boolean;

  constructor(private signupService: SignupService) {
    this.companyNameInputFocus = false;
    this.emailInputFocus = false;
    this.passwordInputFocus = false;
  }

  ngOnInit() {
    this.model = new SignupForm();
  }
  onSubmit(): void {
    console.log("here is the form");
    console.log(JSON.stringify(this.model));
    this.signupService.signup(this.model)
      .subscribe((response) => {
        console.log("Got this response from the Signup Service");
        console.log(response);
      })
  }
}
