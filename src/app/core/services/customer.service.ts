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
      this.http.get(`${this.BASE_URL}/api/users/`)
        .pipe(
          map((response: any) => {
            return response.data.map((user: any) => {
              return new User({
                id: user._id,
                lastname: user.name,
                firstname: user.price
              })
            })
          })
        )
    )
  }

  public getCustomer(id: string): Observable<User> {
    return (
      this.http.get(`${this.BASE_URL}/api/users/${id}`)
        .pipe(
          map((response: any) => {
            const user = new User({
              id: response.data._id,
              lastname: response.data.lastname,
              firstname: response.data.firstname,
              email: response.data.email,
              address: response.data.address,
              CP: response.data.CP,
              city: response.data.city,
              role: response.data.role,
              phone: response.data.phone,
            })
            return user;
          })
        )
    )
  }

  public updateCustomer(id: string, userToUpdate: User): Observable<any> {

    const data = {
      lastname: userToUpdate.lastname,
      firstname: userToUpdate.firstname,
      address: userToUpdate.address,
      CP: userToUpdate.CP,
      city: userToUpdate.city,
      phone: userToUpdate.phone
    }
    return  this.http.patch(`${this.BASE_URL}/api/users/${id}`, data);
  }


}
