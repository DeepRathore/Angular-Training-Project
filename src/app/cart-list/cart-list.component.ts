import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public productsList: any;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.CartService.getAllProducts()
    .subscribe(res => {
      this.productsList = res;
    });
  }

  remove(product: any) {
    this.productsList = this.CartService.removeProduct(product);
  }

  increaseProduct(product: any) {
    this.productsList = this.CartService.increaseProduct(product);
  }

  // decreaseProduct(product: any) {
  //   this.productsList = this.CartService.decreaseProduct(product);
  // }

}
