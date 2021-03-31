import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServerResponse } from 'src/app/shared/models/server-response';
import { User, UserRole } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.experFoodDeliveryApi;

  constructor(private router: Router, private http: HttpClient) { }

  redirectUrl: string = '/home';
  $userConnected = new BehaviorSubject<User | null>(null);

  private log(log: string) {
    console.info(log);
  }

  isLoggedIn() {
    return !!localStorage.getItem('jwt');
  }


  updateUserInfos() {

    if (this.isLoggedIn()) {
      const connexionUserObject = JSON.parse(localStorage.getItem('user') ?? "");
      const userConnected : User  = new User({
        id: connexionUserObject._id,
        firstname: connexionUserObject.firstname,
        lastname: connexionUserObject.lastname,
        email: connexionUserObject.email,
        role : connexionUserObject.role
      })

      this.$userConnected.next(userConnected);
    } else {
      this.$userConnected.next(null);
    }

  }


  login(credentials: User): Observable<ServerResponse> {

    let data = {
      email : credentials.email,
      password: credentials.password
    }

    return this.http.post(`${this.BASE_URL}/api/login`, data).pipe(
      tap((response) => {
        this.log(`try to login : ${credentials}`);
        if (response && response.success) {
          localStorage.setItem('jwt', JSON.stringify(response.data.token));
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.router.navigate([this.redirectUrl]);
        }else {
          localStorage.removeItem('jwt');
        }
        this.updateUserInfos();
      })
    );

  }

  register(user: User): Observable<ServerResponse> {

    let data = {
      lastname: user.lastname,
      firstname: user.firstname,
      role: user.role,
      email: user.email,
      password: user.password,
      address: user.address,
      CP: user.CP,
      city: user.city,
      phone: user.phone
    }

    return this.http.post(`${this.BASE_URL}/api/register`, data).pipe(
      tap(response => {
        this.log(`try to register : ${user}`);
        if (response.success) {
        }else {

        }
      })
    );

  }


  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.updateUserInfos();
  }



}
