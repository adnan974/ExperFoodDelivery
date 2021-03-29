import { User, UserRole } from './../../shared/models/user';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const roles = route.data.roles;

    return this.authService.$userConnected.pipe(
      map(user=> {
        if (!!user && !!user.role && !!roles && roles.includes(user.role)) {
          return true
        }else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

}
