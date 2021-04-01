import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { CommonService } from 'src/app/core/services/common.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'efd-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loading: boolean = false;
  invalidCredentials:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private authService: AuthService, private router: Router, private commonService: CommonService) { }


  ngOnInit(): void {}

  login(userCredentials: User) {
    this.loading = true;
    this.authService.login(userCredentials).toPromise()
      .then((response) => {
        if (response.success) {
          this.commonService.changeSnackBarMessage("Vous êtes connecté !");
        } else {
          this.invalidCredentials.next(true);
          this.commonService.changeSnackBarMessage("Identifiants incorrects");
        }
      })
      .catch((error) => {
        console.error(error);
        this.commonService.changeSnackBarMessage(`La connexion a échoué`)
      }).finally(() => {
        this.loading = false;
      })
  }
  onTyping(){
    this.invalidCredentials.next(false);
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }

}
