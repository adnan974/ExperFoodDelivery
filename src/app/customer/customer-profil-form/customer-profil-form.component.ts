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
  updateLoginForm?: FormGroup;
  updateInfoGroup?: FormGroup;
  isEditable = true;
  user?: User;
  hide = true;
  constructor(private route: Router, private fb: FormBuilder, private us: CustomerService) { }

  ngOnInit(): void {
    const connexionUserObject = JSON.parse(localStorage.getItem('user') ?? "");
    const user = this.us.getCustomer(connexionUserObject._id);
  }
  updateLogin() {
    this.user && this.updateLoginForm &&
    (this.user.email = this.updateLoginForm.value['emailCtrl']) &&
    (this.user.password = this.updateLoginForm.value['passwordCtrl']);

  }

  updateProfil() {
    this.user && this.updateInfoGroup &&
    (this.user.lastname = this.updateInfoGroup.value['lastnameCtrl'])&&
    (this.user.firstname = this.updateInfoGroup.value['firstnameCtrl'])&&
    (this.user.address = this.updateInfoGroup.value['addressCtrl'])&&
    (this.user.city = this.updateInfoGroup.value['cityCtrl'])&&
    (this.user.CP = this.updateInfoGroup.value['cpCtrl'])
  }
}
