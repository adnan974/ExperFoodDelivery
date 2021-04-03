import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CommonService } from '../../core/services/common.service';
import { CustomerService } from '../../core/services/customer.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'efd-customer-uptdate-profil-page',
  templateUrl: './customer-uptdate-profil-page.component.html',
  styleUrls: ['./customer-uptdate-profil-page.component.scss']
})
export class CustomerUptdateProfilPageComponent implements OnInit {
  user: User = new User();
  userconnect: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  constructor(private us: CustomerService, private authService: AuthService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.authService.$userConnected.subscribe((user) => {
      if (user) {
        this.us.getCustomer(user.id).toPromise()
          .then((response) => {
            this.user.id = response.id;
            this.user.firstname = response.firstname;
            this.user.lastname = response.lastname;
            this.user.email = response.email;
            this.user.address = response.address;
            this.user.CP = response.CP;
            this.user.city = response.city;
            this.user.phone = response.phone;
            this.user.password = response.password;
            console.log(this.user);
            this.userconnect.next(this.user);
          })
          .catch((error) => {
            console.error(error);
            this.commonService.changeSnackBarMessage(`Erreur : ${error.error ? error.error.message : error.message ? error.message : error}`)
          })
          .finally(() => {

          })
      }
    })
  }


  updateUser(userUpdated: User) {
    console.log(userUpdated);
    this.us.updateCustomer(userUpdated.id, userUpdated).toPromise()
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });
  }

}
