import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPageService {
  totalPrice = new Subject<number>();

  constructor() { }

  getTotalPrice(): Observable<number> {
    return this.totalPrice.asObservable();
  }

  setTotalPrice(price: number) {
    this.totalPrice.next(price);
  }
}
