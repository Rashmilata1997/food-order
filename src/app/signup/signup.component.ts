import { Component, OnInit } from '@angular/core';
import { LoginCredService } from '../services/login-cred.service';
import { Router } from '@angular/router';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupUsers:any[]=[];
signupObj:any={
   userName:'',
   email:'',
   password:''
};
loginObj:any={
  userName:'',

  password:''
};
username = "";
  password = "";
  errorMsg = "";
  constructor(private loginCredentials:LoginCredService,private router: Router) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  onLogin(){
    debugger;
const isUserExist=this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
   if(isUserExist != undefined){
    alert('User Login successfully');
   }
   else{
    alert('Wrong Credentials');
   }
  }
  LoginPage(){
    debugger;
    if (this.loginObj.userName && this.loginObj.password) {
      this.loginCredentials.loginUser();
      this.loginCredentials.setUser({ username: this.loginObj.userName });
      
      this.router.navigate(['/home']); // Redirect to home page
    } else {
      console.error('Invalid login credentials');
    }
  }
  login() {
    debugger;
    if (this.loginObj.userName.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.loginObj.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      // let res = this.loginCredentials.login(this.username, this.password);
      const isUserExist=this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
      if(isUserExist != undefined){
       alert('User Login successfully');
       this.router.navigate(['home']);
      }
      else{
        this.errorMsg = "Invalid Credentials";
      }
      
      // if (res === 200) {
      //   this.router.navigate(['home']);
      // }
      // if (res === 403) {
      //   this.errorMsg = "Invalid Credentials";
      // }
    }
  }
  // onSignUp(){
  //   debugger;
    
  //   if(this.signupObj.userName !== "" && this.signupObj.password !== "" && this.signupObj.email !== ""){
  //     this.signupUsers.push(this.signupObj);
  //     localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  //     this.signupObj={
  //       userName:'',
  //       email:'',
  //       password:''
  //    };
  //    alert('User signed up successfully!');

  //   }
  //   else{
  //     alert('Please enter details !');
  //   }
  // }
  customEmailValidator(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailPattern.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
  onSignUp(signupForm: NgForm) {
    debugger;
  
    // Check if the form is invalid
    if (signupForm.invalid) {
      // Mark all fields as touched
      Object.keys(signupForm.controls).forEach((controlName) => {
        signupForm.controls[controlName].markAsTouched();
      });
  
      // Show an alert for invalid form
      alert('Please fill out all fields correctly!');
      return;
    }
  
    // Push the signup object to the users list
    this.signupUsers.push(this.signupObj);
  
    // Save the users list to local storage
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  
    // Clear the form fields
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  
    // Reset the form
    signupForm.resetForm();
  
    // Show a success message
    alert('User signed up successfully!');
  }
}
