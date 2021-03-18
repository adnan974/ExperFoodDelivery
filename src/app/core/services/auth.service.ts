import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  redirectUrl: string = '/customer/home';


  $userConnected = new BehaviorSubject<Partial<User>>(null);

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

  login(userCredentials: Partial<User>) : void { 
      // TODO
      localStorage.setItem('jwt', JSON.stringify(userCredentials));
      this.updateUserInfos();
      this.router.navigate([this.redirectUrl]);
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
    this.updateUserInfos();
  }



}
