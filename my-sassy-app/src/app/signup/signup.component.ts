import { Component, OnInit } from '@angular/core';

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

  constructor() {
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
  }
}

export class SignupForm {
  companyName: string;
  email: string;
  password: string;
}
