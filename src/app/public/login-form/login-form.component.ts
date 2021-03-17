import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user : User = new User();
  loginForm : FormGroup;

  constructor(private fb : FormBuilder, private router: Router) {     

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email' : '',
      'password' : ''
    })
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  login() {   
    //todo
  }
}
