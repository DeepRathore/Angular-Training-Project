import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPageService {
  data = new Subject<any>();

  constructor() { }

  getTotalPrice(): Observable<any> {
    return this.data.asObservable();
  }

  setTotalPrice(data: any) {
    this.data.next(data);
  }
}
