import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  hide = true;
  @Input() user: User | undefined;
  @Input() userconnect?: Observable<User>;
  @Output() updateUser: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: Router, private fb: FormBuilder) {
    this.updateLoginForm = this.fb.group({
      'emailCtrl': [],
      'passwordCtrl': [],
    });
    this.updateInfoGroup = this.fb.group({
      'lastnameCtrl': [],
        'firstnameCtrl': [],
        'addressCtrl': [],
        'cityCtrl': [],
        'cpCtrl': [],
    });
  }

  ngOnInit(): void {
    this.userconnect?.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe((value) => {
        this.updateLoginForm?.get('emailCtrl')?.setValue(value.email);
        this.updateLoginForm?.get('passwordCtrl')?.setValue(value.password);

        this.updateInfoGroup?.get('lastnameCtrl')?.setValue(value.lastname);
        this.updateInfoGroup?.get('firstnameCtrl')?.setValue(value.firstname);
        this.updateInfoGroup?.get('addressCtrl')?.setValue(value.address);
        this.updateInfoGroup?.get('cityCtrl')?.setValue(value.city);
        this.updateInfoGroup?.get('cpCtrl')?.setValue(value.CP);
      })
  }

  updateLogin() {
    this.user && this.updateLoginForm &&
    (this.user.email = this.updateLoginForm.value['emailCtrl']) &&
      (this.user.password = this.updateLoginForm.value['passwordCtrl']);
    console.log(this.user?.email);
  }

  updateProfil() {
    this.user && this.updateInfoGroup &&
      (this.user.lastname = this.updateInfoGroup.value['lastnameCtrl']) &&
      (this.user.firstname = this.updateInfoGroup.value['firstnameCtrl']) &&
      (this.user.address = this.updateInfoGroup.value['addressCtrl']) &&
      (this.user.city = this.updateInfoGroup.value['cityCtrl']) &&
      (this.user.CP = this.updateInfoGroup.value['cpCtrl']);
    console.log(this.user);
    this.updateUser.emit(this.user);
  }

}
