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
  cartTotal: number = 0;

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
    this.cartTotal += item.price;
    this.cartPageService.setTotalPrice(this.cartTotal);
    item.added = true;
  }

  removeItemToCart(item: any) {
    this.cartTotal -= item.price;
    this.cartPageService.setTotalPrice(this.cartTotal);
    item.added = false;
  }

}
