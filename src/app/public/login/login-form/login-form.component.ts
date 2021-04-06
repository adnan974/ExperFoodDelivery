import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'efd-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Input() loading: boolean = false;
  @Input() invalidCredentials?: Observable<boolean>;
  @Output() connect : EventEmitter<any> = new EventEmitter<any>();
  @Output() typing : EventEmitter<any> = new EventEmitter<any>();
  invaldCredentialsSubscription?: Subscription;

  public user: User = new User();
  public loginForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private router: Router) {}

  get email(): string { return this.loginForm && this.loginForm.get('email')?.value; }
  get password(): string { return this.loginForm && this.loginForm.get('password')?.value; }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email ]],
      password : ['', [Validators.required]]
    });
    this.invaldCredentialsSubscription = this.invalidCredentials?.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((value)=>{
      if(value === true){
        this.loginForm?.get('email')?.setErrors({'invalid-credentials': true});
        this.loginForm?.get('password')?.setErrors({'invalid-credentials': true});
      }else{
        this.loginForm?.get('email')?.updateValueAndValidity();
        this.loginForm?.get('password')?.updateValueAndValidity();
      }

    })
  }

  login() {
    const user = {
      email : this.email,
      password : this.password,
    }
    this.connect.emit(user);
  }

  onTyping(){
    this.typing.emit();
  }

  ngOnDestroy(): void {
    this.invaldCredentialsSubscription?.unsubscribe();
  }
}
