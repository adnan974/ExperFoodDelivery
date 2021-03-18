import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  registerLoginForm: FormGroup;
  registerInfoGroup: FormGroup;
  isEditable = true;
  user: User;
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerLoginForm = this.fb.group({
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required]
    });
    this.registerInfoGroup = this.fb.group({
      lastNameCtrl: ['', Validators.required],
      firstNameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      cpCtrl: ['', Validators.required]

    });
    this.user = new User();
  }
  registerLogin() {
    console.log(this.registerLoginForm.value);
    this.user.email = this.registerLoginForm.value['emailCtrl'];
    this.user.password = this.registerLoginForm.value['passwordCtrl'];
    console.log(this.user);
  }

  register() {
    console.log(this.registerInfoGroup.value);
    this.user.lastName = this.registerInfoGroup.value['lastNameCtrl'];
    this.user.firstName = this.registerInfoGroup.value['firstNameCtrl'];
    this.user.address = this.registerInfoGroup.value['addressCtrl'];
    this.user.city = this.registerInfoGroup.value['cityCtrl'];
    this.user.CP = this.registerInfoGroup.value['cpCtrl'];
    console.log(this.user);
  }

}
