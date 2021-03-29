import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() loading: boolean = false;
  @Output() connect : EventEmitter<any> = new EventEmitter<any>();

  user : User = new User();
  loginForm: FormGroup | undefined;

  constructor(private fb : FormBuilder, private router: Router) {}

  get email() { return this.loginForm && this.loginForm.get('email')?.value }
  get password() { return this.loginForm && this.loginForm.get('password')?.value }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email' : '',
      'password' : ''
    })
  }



  login() {
    const user = {
      _email : this.email,
      _password : this.password,
    }
    this.connect.emit(user);

  }
}
