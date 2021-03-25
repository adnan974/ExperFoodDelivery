import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-profil-show',
  templateUrl: './customer-profil-show.component.html',
  styleUrls: ['./customer-profil-show.component.scss']
})
export class CustomerProfilShowComponent implements OnInit {
  public user?: User;
  constructor(private userservice: CustomerService, private route : Router) { }

  ngOnInit(): void {
    this.user = this.userservice.getCustomer(1);
  }

  navigate(link : string) {
    this.route.navigate([link]);
  }

  delete(id: number) {

  }
}
