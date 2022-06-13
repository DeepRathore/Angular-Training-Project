import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FetchProductsApiService} from '../fetch-products-api.service';
import {MatDialog} from '@angular/material/dialog';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productsList: any;

  constructor(
    private FetchProductsApiService: FetchProductsApiService, 
    private router: Router,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    var url = this.router.url;
    if (url.includes('category')) {
      this.FetchProductsApiService.categoryBasedProduct((url).split('/')[3])
      .subscribe(res => {
        this.productsList = res;
      })
    } else {
      this.FetchProductsApiService.productsList()
      .subscribe(res => {
        this.productsList = res;
      })
    }
  }

  openDialog() {
    this.dialog.open(AddProductModalComponent, {
      width: '30%'
    });
  }
}
