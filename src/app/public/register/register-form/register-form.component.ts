import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'efd-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() register : EventEmitter<any> = new EventEmitter<any>();

  registerLoginForm?: FormGroup;
  registerInfoGroup?: FormGroup;
  isEditable = true;
  user: User = new User();
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerLoginForm = this.fb.group({
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required]
    });
    this.registerInfoGroup = this.fb.group({
      lastnameCtrl: ['', Validators.required],
      firstnameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      cpCtrl: ['', Validators.required]

    });
  }
  registerLogin() : void {
    this.registerLoginForm &&
    (this.user.email = this.registerLoginForm.value['emailCtrl']) &&
    (this.user.password = this.registerLoginForm.value['passwordCtrl']);
  }

  submit() {
    this.registerInfoGroup &&
    (this.user.lastname = this.registerInfoGroup.value['lastnameCtrl'])&&
    (this.user.firstname = this.registerInfoGroup.value['firstnameCtrl'])&&
    (this.user.address = this.registerInfoGroup.value['addressCtrl'])&&
    (this.user.city = this.registerInfoGroup.value['cityCtrl'])&&
    (this.user.CP = this.registerInfoGroup.value['cpCtrl'])

    this.register.emit(this.user);
  }



}
