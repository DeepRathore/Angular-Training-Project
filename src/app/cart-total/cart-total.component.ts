import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
  public total: any;
  public totalItems: any;
  public subtotal: any;
  constructor(private CartService: CartService) { }


  ngOnInit(): void {
    this.CartService.sharedProductsList.subscribe((res) => {
        this.total = this.CartService.getSubtotal();
        this.CartService.getAllProducts()
        .subscribe(res => {
          this.totalItems = res;
        });
        this.calculateSubtotal();
      }
    );
  }

  calculateSubtotal() {
    let amount = this.total * 18/100;
    this.subtotal = this.total + amount;
  }

}
