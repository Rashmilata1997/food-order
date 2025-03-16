import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredService } from '../services/login-cred.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";
  constructor(private router: Router,private loginCredentials:LoginCredService) { }

  ngOnInit(): void {
  }
  login() {
    debugger;
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.loginCredentials.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

}
