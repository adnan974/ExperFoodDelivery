import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'efd-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  registerLoginForm: FormGroup;
  registerInfoGroup: FormGroup;
  isEditable = true;
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
  }
  RegisterLogin() {

  }

  Register() {

  }

}
