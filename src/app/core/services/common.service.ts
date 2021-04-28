import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private snackBarData = new BehaviorSubject<string | null>(null);
  snackBardata$ = this.snackBarData.asObservable();

  constructor() { }

  changeSnackBarMessage(data: string): void {
    this.snackBarData.next(data);
  }

}
