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
  totalItems: number = 0;
  constructor(private cartPageService: CartPageService) { }

  ngOnInit(): void {
    this.cartPageService.getTotalPrice()
    .subscribe(data => {
      this.cartTotal = Math.round(data.total);
      this.gstAmount = Math.round(data.total * 18 / 100);
      this.totalAmount = data.total + this.gstAmount;
      this.totalItems = data.itemCount;
    });
  }

}
