import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  hide = true;
  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email") ? "Not a valid email" : "";
  }

  constructor() { }

  ngOnInit() { }

  loginClient() {
    console.log("*** LOGIN NEEDS TO BE CREATED  ***")
  }

}
