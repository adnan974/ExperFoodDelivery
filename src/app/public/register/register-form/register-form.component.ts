import { UserRole } from './../../../shared/models/user';
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

  registerRoleForm?: FormGroup;
  registerLoginForm?: FormGroup;
  registerInfoGroup?: FormGroup;
  isEditable = true;
  user: User = new User();
  hide = true;
  constructor(private fb: FormBuilder) { }

  get userRole(): typeof UserRole {
    return UserRole;
  }

  ngOnInit(): void {


    this.registerRoleForm = this.fb.group({
      roleCtrl: ['', Validators.required],
    });

    this.registerLoginForm = this.fb.group({
      emailCtrl: ['', [Validators.required, Validators.email ]],
      passwordCtrl: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registerInfoGroup = this.fb.group({
      lastnameCtrl: ['', Validators.required],
      firstnameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      cpCtrl: ['', Validators.required]

    });
  }

  registerRole() : void {
    this.registerRoleForm &&
    (this.user.role = this.registerRoleForm.value['roleCtrl']);

    console.log(this.user);
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
    (this.user.CP = this.registerInfoGroup.value['cpCtrl']) &&
    (this.user.phone = this.registerInfoGroup.value['phoneCtrl'])
    this.register.emit(this.user);
  }



}
