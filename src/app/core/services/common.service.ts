import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private snackBarData = new BehaviorSubject<string | null>(null);
  snackBardata$ = this.snackBarData.asObservable();

  constructor() { }

  changeSnackBarMessage(data: string) {
    this.snackBarData.next(data);
  }

}
