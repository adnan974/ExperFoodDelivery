import { AuthService } from './core/services/auth.service';
import { CommonService } from './core/services/common.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User, UserRole } from './shared/models/user';

@Component({
  selector: 'efd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exper-food-delivery';
  userConnected: Partial<User>;
  get userRole(): typeof UserRole {
    return UserRole;
  }

  constructor(
    private authService:AuthService,
    private commonService: CommonService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.authService.$userConnected.subscribe((response) => {

      this.userConnected = response;
    })
    this.authService.updateUserInfos();

    this.commonService.snackBardata$.subscribe((data) => {
      if (data !== null) {
        this.snackBar.open(data, null, {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'efd-snackbar'
        });
      }
    });
  }
}
