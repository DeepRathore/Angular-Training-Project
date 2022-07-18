import { Component, OnInit } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartPageService } from './../services/cart-page.service'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartData: any;

  constructor(private http: HttpClient, private cartPageService: CartPageService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.http.get('https://fakestoreapi.com/products?limit=5').subscribe(
      data => {
        this.cartData = data;
      }
    );
  }

  addItemToCart(item: any) {
    item.added = true;
    item.count = !item.count ? 1 : (item.count + 1);
    this.calculateTotalPrice();
  }

  removeItemToCart(item: any) {
    item.added = false;
    item.count -= 1;
    this.calculateTotalPrice();
  }

  changeCount(item: any, action: string) {
    if (action == 'removeUnit') {
      item.count -= 1;
    } else if (action == 'remove') {
      item.count = 0;
    } else {
      item.count = item.count ? item.count : 0;
      item.count += 1;
    }
    item.added = item.count && item.count > 0;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let cartTotal: number = 0;
    let itemCount: number = 0;
    this.cartData.map((item: any) => {
      if (!item.added) return;
      cartTotal += item.price * (item.count ? item.count : 1);
      itemCount += item.count ? item.count : 0;
    });
    this.cartPageService.setTotalPrice({total: cartTotal, itemCount: itemCount});
  }
}
