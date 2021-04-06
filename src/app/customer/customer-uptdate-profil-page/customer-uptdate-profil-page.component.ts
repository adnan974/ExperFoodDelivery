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
  constructor(private customerService: CustomerService, private authService: AuthService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.authService.$userConnected.subscribe((user) => {
      if (user) {
        this.customerService.getCustomer(user.id!).toPromise()
          .then((user:User) => {
            this.user = user;
            this.userconnect.next(this.user);
          })
          .catch((error) => {
            console.error(error);
            this.commonService.changeSnackBarMessage(`Erreur : "TODO: message d'erreur"`)
          })
          .finally(() => {
            //TODO
          })
      }
    })
  }


  updateUser(userUpdated: User): void {
    this.customerService.updateCustomer(userUpdated.id!, userUpdated).toPromise()
      .then((response) => {
        // TODO
      }).catch((error) => {
        // TODO
        console.error(error);
      });
  }

}
