import { Component, OnInit } from '@angular/core';
import { CartPageService } from './../services/cart-page.service'

@Component({
  selector: 'cart-price-summary',
  templateUrl: './cart-price-summary.component.html',
  styleUrls: ['./cart-price-summary.component.scss']
})
export class CartPriceSummaryComponent implements OnInit {
  cartTotal: number = 0;
  gstAmount: number = 0;
  totalAmount: number = 0;
  constructor(private cartPageService: CartPageService) { }

  ngOnInit(): void {
    this.cartPageService.getTotalPrice()
    .subscribe(data => {
      this.cartTotal = Math.round(data);
      this.gstAmount = Math.round(data * 18 / 100);
      this.totalAmount = this.cartTotal + this.gstAmount;
    });
  }

}
