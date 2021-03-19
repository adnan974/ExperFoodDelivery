import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  redirectUrl: string = '/customer/home';
  $userConnected = new BehaviorSubject<Partial<User>>(null);

  private log(log: string) {
    console.info(log);
  }

  isLoggedIn() {
    return !!localStorage.getItem('jwt');
  }


  updateUserInfos() {

    if (this.isLoggedIn()) {
      const connexionUserObject = JSON.parse(localStorage.getItem('jwt'));
      const userConnected : Partial<User>  = {
        //id: connexionUserObject.user.id,
        //firstName: connexionUserObject.user.firstname,
        //lastName: connexionUserObject.user.lastname,
        email: connexionUserObject.email,
      }
      this.$userConnected.next(userConnected);
    } else {
      this.$userConnected.next(null);
    }

  }


  login(credentials: Partial<User>): Observable<any> {
    console.log('on est dans le auth service login')
    return this.http.post('http://localhost:5000/auth/login', credentials).pipe(
      tap(response => {
        this.log(`try to login : ${credentials}`);
        if (response.success) {
          localStorage.setItem('jwt', JSON.stringify(response.token));
          this.router.navigate([this.redirectUrl]);
        }else {
          localStorage.removeItem('jwt');
        }

        this.updateUserInfos();
      })
    );

  }


  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
    this.updateUserInfos();
  }



}
