import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private BASE_URL = environment.experFoodDeliveryApi;
  private users: Array<User> = [];

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {

    return (
      this.http.get(this.BASE_URL + '/api/users')
        .pipe(
          map((users: any) => {
            return users.map((user: any) => {
              return new User({
                id: user._id,
                lastname: user._name,
                firstname: user._price
              })
            })
          })
        )
    )
  }

  public getCustomer(id: string | undefined): Observable<User> {
    return (
      this.http.get(this.BASE_URL + '/api/users/'+ id)
        .pipe(
          map((user: any) => {
              const u = new User({
                id: user.data._id,
                lastname: user.data.lastname,
                firstname: user.data.firstname,
                email: user.data.email,
                address: user.data.address,
                CP: user.data.CP,
                city: user.data.city,
                role: user.data.role,
                phone: user.data.phone,
              })
            return u;
          })
        )
    )
  }

  public updateCustomer(id: string | undefined, userupdated: User): Observable<User> {
    return (
      this.http.patch(this.BASE_URL + '/api/users/' + id, userupdated)
      .pipe(
        map((userupdated: any) => {
          console.log(userupdated);
          const u = new User({
            id: userupdated.data.id,
            lastname: userupdated.data.lastname,
            firstname: userupdated.data.firstname,
            email: userupdated.data.email,
            address: userupdated.data.address,
            CP: userupdated.data.CP,
            city: userupdated.data.city,
            role: userupdated.data.role,
            phone: userupdated.data.phone,
          })
          return u;
        })
      )
      )
  }

  public postCustomer(user: User): User {
    this.users.push(user);
    return user;
  }

  public deleteCustomer(id: number): boolean {
    return true;
  }
}
