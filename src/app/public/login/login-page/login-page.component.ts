import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { CommonService } from 'src/app/core/services/common.service';



@Component({
  selector: 'efd-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  login(userCredentials: User) {
    this.loading = true;
    this.authService.login(userCredentials).toPromise()
      .then((response) => {
        if (response.success) {
          this.commonService.changeSnackBarMessage("Vous êtes connecté !");
        } else {
          this.commonService.changeSnackBarMessage("La connexion a échoué. Vérifiez vos identifiants");
        }



      })
      .catch((error) => {
        console.error(error);
        this.commonService.changeSnackBarMessage(`Erreur : ${error.error ? error.error.message : error.message ? error.message : error}`)
      }).finally(() => {
        //this.loading = false;
      })
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
