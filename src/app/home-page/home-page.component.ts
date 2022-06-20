import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private productListService: ProductListService) { }

  products: any;

  ngOnInit(): void {
    this.initProductList();
  }

  initProductList() {
    this.productListService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    );
  }

}
