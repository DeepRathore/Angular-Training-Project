import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  getProductList() {
    let url = 'https://fakestoreapi.com/products';
    return this.http.get(url);
  }
}
