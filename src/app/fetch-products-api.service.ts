import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchProductsApiService {

  constructor(private http: HttpClient) { }

  public fetchCategories():Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  
  public productsList():Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  public categoryBasedProduct(category: string):Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/category/' + category);
  }

  public allAvailableUsersList():Observable<any> {
    return this.http.get('https://fakestoreapi.com/users?limit=5');
  }

  public findUserDetails(id: any):Observable<any> {
    return this.http.get('https://fakestoreapi.com/users/' + id);
  }

  public userCartDetails(userId: any):Observable<any> {
    return this.http.get('https://fakestoreapi.com/carts/user/' + userId);
  }

  public addProduct(params: any):Observable<any> {
    return this.http.post('http://localhost:3001/products.json', params);
  }
}
