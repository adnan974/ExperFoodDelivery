import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonService } from '../../core/services/common.service';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-profil-page',
  templateUrl: './customer-profil-page.component.html',
  styleUrls: ['./customer-profil-page.component.scss']
})
export class CustomerProfilPageComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private userservice: CustomerService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.authService.$userConnected.subscribe((user) => {

      if (user) {
        this.userservice.getCustomer(user.id!).toPromise()
          .then((response) => {
            this.user = user;
          })
          .catch((error) => {
            console.error(error);
            this.commonService.changeSnackBarMessage(`Erreur : "TODO : message d'erreur"`);
          })
          .finally(() => {})
      }
    });
  }

}
