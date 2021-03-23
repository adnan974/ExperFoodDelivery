import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss']
})
export class CustomerNavbarComponent implements OnInit{

  userConnected: Partial<User>;

  constructor(private router : Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.$userConnected.subscribe((response) => {

      this.userConnected = response;
    })
    this.authService.updateUserInfos(); //TODO

  }

  navigate(link:string){

    this.router.navigate([link]);

  }

  logout(){
    this.authService.logout();
  }

}
