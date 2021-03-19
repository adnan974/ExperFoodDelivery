import { CommonService } from './core/services/common.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'efd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exper-food-delivery';

  constructor(

    private commonService: CommonService,
    private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {

    this.commonService.snackBardata$.subscribe((data) => {
      if (data !== null) {
        this._snackBar.open(data, null, {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'efd-snackbar'
        });
      }
    })
  }
}
