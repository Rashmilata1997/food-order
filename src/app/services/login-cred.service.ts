import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginCredService {
signupUsers:any[]=[];
private user: { username: string } | null = null;
private loggedIn = false;
  constructor(private router:Router) { }
  login(uname: string, pword: string) {
    if (uname === 'rashmi' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login']);
  }

  setUser(user: { username: string }) {
    debugger;
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
  }
  
  getUser() { 
    debugger;
    if (!this.user) {
      const userData = localStorage.getItem('user');
      this.user = userData ? JSON.parse(userData) : null;
    }
    return this.user;
  }


  loginUser() {
    this.loggedIn = true; // Set login state to true
  }

  logoutUser() {
    this.loggedIn = false; // Set login state to false
  }

  isLoggedIn() {
    return this.loggedIn; // Return current login state
  }
}
