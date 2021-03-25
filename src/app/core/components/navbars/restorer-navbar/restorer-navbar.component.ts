import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'efd-restorer-navbar',
  templateUrl: './restorer-navbar.component.html',
  styleUrls: ['./restorer-navbar.component.scss']
})
export class RestorerNavbarComponent implements OnInit {

  userConnected?: User | null;

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
