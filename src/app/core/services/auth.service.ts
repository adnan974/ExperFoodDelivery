import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User, UserRole } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

class  ServerAuthResponse {
  success?: boolean;
  message?: string;
  data?: unknown;
  token? : string
}

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
        firstname: connexionUserObject._firstname,
        lastname: connexionUserObject._lastname,
        email: connexionUserObject._email,
        role : connexionUserObject._role
      })

      this.$userConnected.next(userConnected);
    } else {
      this.$userConnected.next(null);
    }

  }


  login(credentials: User): Observable<ServerAuthResponse> {
    return this.http.post(`${this.BASE_URL}/api/login`, credentials).pipe(
      tap((response) => {
        this.log(`try to login : ${credentials}`);
        if (response && response.success) {
          localStorage.setItem('jwt', JSON.stringify(response.token));
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate([this.redirectUrl]);
        }else {
          localStorage.removeItem('jwt');
        }
        this.updateUserInfos();
      })
    );

  }

  register(user: Partial<User>): Observable<ServerAuthResponse> {
    return this.http.post(`${this.BASE_URL}/api/register`, user).pipe(
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
