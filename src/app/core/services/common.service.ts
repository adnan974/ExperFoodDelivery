import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private snackBarData = new BehaviorSubject(null);
  snackBardata$ = this.snackBarData.asObservable();

  constructor() { }

  changeSnackBarMessage(data: string) {
    this.snackBarData.next(data);
  }

}
