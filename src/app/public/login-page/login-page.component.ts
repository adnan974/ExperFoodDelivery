import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';



@Component({
  selector: 'efd-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }


  connect(userCredentials : Partial<User>) {

    this.authService.login(userCredentials);

  }
}
