import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../core/services/common.service';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-profil-show',
  templateUrl: './customer-profil-show.component.html',
  styleUrls: ['./customer-profil-show.component.scss']
})
export class CustomerProfilShowComponent implements OnInit {
  user: User = new User();
  constructor(private userservice: CustomerService, private route: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    const connexionUserObject = JSON.parse(localStorage.getItem('user') ?? "");
    this.userservice.getCustomer(connexionUserObject._id).toPromise()
      .then((response) => {
        this.user.firstname = response.firstname;
        this.user.lastname = response.lastname;
        this.user.email = response.email;
        this.user.address = response.address;
        this.user.CP = response.CP;
        this.user.city = response.city;
    })
      .catch((error) => {
        console.error(error);
        this.commonService.changeSnackBarMessage(`Erreur : ${error.error ? error.error.message : error.message ? error.message : error}`)
      }).finally(() => {
        //this.loading = false;
      })

  }

  navigate(link : string) {
    this.route.navigate([link]);
  }

  delete(id: number) {

  }
}
