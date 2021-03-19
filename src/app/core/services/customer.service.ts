import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private user: User = new User();
  constructor() { }

  public getCustomer(id: number): User {
    this.user.id = 1;
    this.user.lastName = "Julie";
    this.user.firstName = "Murielle";
    this.user.city = "Saint-Joseph";
    this.user.address = "rue des alouettes";
    this.user.CP = "97480";
    this.user.email = "tes@email.fr";
    this.user.password = "1245";

    return this.user;
  }
  public updateCustomer(id: number) : User {
    return this.user;
  }
  public deleteCustomer(id: number): boolean {
    return true;
  }
}
