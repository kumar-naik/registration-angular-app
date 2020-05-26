import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  show: boolean = true;
  errorMessage: String ="";
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      email: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
  
  //  alert(loginPayload.username);

  this.apiService.login(loginPayload).subscribe(data => {
    //debugger;
   // alert(data.result.status);
    if(data.result.status === 'Y') {
    //  alert('success');
      window.localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
      // this.invalidLogin = false;

      //this.router.navigate(['list-user']);
    }else {
     window.localStorage.setItem('token', 'false');
      this.invalidLogin = true;
      this.errorMessage=data.message;
     // alert(data.message);
    }
  });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }



}
