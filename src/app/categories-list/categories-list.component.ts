import { Component, OnInit } from '@angular/core';
import {FetchProductsApiService} from '../fetch-products-api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories: any;

  constructor(private FetchProductsApiService: FetchProductsApiService) { }

  ngOnInit(): void {
    this.FetchProductsApiService.fetchCategories()
    .subscribe(res => {
      this.categories = res;
    })
  }
}
