import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-profil-form',
  templateUrl: './customer-profil-form.component.html',
  styleUrls: ['./customer-profil-form.component.scss']
})
export class CustomerProfilFormComponent implements OnInit {
  updateLoginForm: FormGroup;
  updateInfoGroup: FormGroup;
  isEditable = true;
  user: User;
  hide = true;
  constructor(private route: Router, private fb: FormBuilder, private us: CustomerService) { }

  ngOnInit(): void {
    this.user = this.us.getCustomer(1);
    console.log(this.us.getCustomer(1).email);
    this.updateLoginForm = this.fb.group({
      emailCtrl: [this.user.email, Validators.required],
      passwordCtrl: [this.user.password, Validators.required]
    });
    this.updateInfoGroup = this.fb.group({
      lastNameCtrl: [this.user.lastName, Validators.required],
      firstNameCtrl: [this.user.firstName, Validators.required],
      addressCtrl: [this.user.address, Validators.required],
      cityCtrl: [this.user.city, Validators.required],
      cpCtrl: [this.user.CP, Validators.required]

    });
  }
  updateLogin() {
    console.log(this.updateLoginForm.value);
    this.user.email = this.updateLoginForm.value['emailCtrl'];
    this.user.password = this.updateLoginForm.value['passwordCtrl'];
    console.log(this.user);
  }

  updateProfil() {
    console.log(this.updateInfoGroup.value);
    this.user.lastName = this.updateInfoGroup.value['lastNameCtrl'];
    this.user.firstName = this.updateInfoGroup.value['firstNameCtrl'];
    this.user.address = this.updateInfoGroup.value['addressCtrl'];
    this.user.city = this.updateInfoGroup.value['cityCtrl'];
    this.user.CP = this.updateInfoGroup.value['cpCtrl'];
    console.log(this.user);
  }
}