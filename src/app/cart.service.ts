import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpclient : HttpClient) {}

  public cartItemList :any = []

  // it works as an observer and emit data
  private productsList = new BehaviorSubject<any>([]);
  // It catches the changes
  public sharedProductsList = this.productsList.asObservable();

  addToCart(product:any) {
    this.cartItemList.push(product);
    // next = emmiting
    this.productsList.next(this.cartItemList);

    this.getSubtotal();
  }

  getSubtotal() {
    let total = 0;
    this.cartItemList.map((item:any) => {
      total += item.price;
    });

    return total;
  }

  removeAll() {
    this.cartItemList = [];
    this.productsList.next(this.cartItemList);
  }

  removeProduct(product:any) {
    this.cartItemList.map((item:any, index: any) => {
      if(product.id == item.id) {
        this.cartItemList.splice(index, 1);
      }
    });

    this.productsList.next(this.cartItemList);
    return this.cartItemList;
  }

  increaseProduct(product:any) {
    this.cartItemList.map((item:any, index: any) => {
      if(product.id == item.id) {
        this.cartItemList.push(product);
      }
    });
    
    this.productsList.next(this.cartItemList);
    return this.cartItemList;
  }

  // decreaseProduct(product:any) {
  //   this.cartItemList.map((item:any, index: any) => {
  //     if(product.id == item.id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   });
    
  //   this.productsList.next(this.cartItemList);
  //   return this.cartItemList;
  // }

  getAllProducts() {
    return this.sharedProductsList;
  }
}
