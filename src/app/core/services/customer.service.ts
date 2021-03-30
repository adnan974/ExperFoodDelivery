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
    console.log('ici');
    return (
      this.http.get(this.BASE_URL + '/api/users')
        .pipe(
          map((users: any) => {
            console.log(users);
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

  public getCustomer(id: number): Observable<User> {
    return (
      this.http.get(this.BASE_URL + '/api/users/'+ id)
        .pipe(
          map((user: any) => {
              const u = new User({
                id: user.data._id,
                lastname: user.data._lastname,
                firstname: user.data._firstname,
                email: user.data._email
              })
            return u;
          })
        )
    )
  }

  public updateCustomer(id: number): User {
    const user = this.users.filter((item) => item.id = id);
    return user[0];
  }

  public postCustomer(user: User): User {
    this.users.push(user);
    return user;
  }

  public deleteCustomer(id: number): boolean {
    return true;
  }
}
