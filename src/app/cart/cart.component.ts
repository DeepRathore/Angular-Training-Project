import { Component, OnInit } from '@angular/core';
import { FetchProductsApiService } from '../fetch-products-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartDetails: any;
  displayedColumns: string[] = ['Date', 'Name', 'Price', 'Quanity'];

  constructor(private FetchProductsApiService: FetchProductsApiService) { }
  ngOnInit(): void {
    this.FetchProductsApiService.userCartDetails(localStorage.getItem('token')) 
    .subscribe(res => {
      this.cartDetails = res[0];
      moment();
    });
  }
}

