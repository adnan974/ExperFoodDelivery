import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router, private commonService: CommonService) {}

  ngOnInit(): void {}

  register(userCredentials : User) {
    this.authService.register(userCredentials).toPromise()
    .then((response)=> {
      if (response.success) {
        this.commonService.changeSnackBarMessage("Inscription réussie !");
      }else {
        this.commonService.changeSnackBarMessage("L'inscription a échoué.");
      }

    })
    .catch((error)=> {
      console.error(error);
      this.commonService.changeSnackBarMessage(`Erreur : ${error.error ? error.error.message : error.message ? error.message : error}`)
    })
  }

}
