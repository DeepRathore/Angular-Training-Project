import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FetchProductsApiService} from './fetch-products-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-site';

  public user: any;
  public userName: any;
  constructor(private router: Router, private FetchProductsApiService: FetchProductsApiService) { }

  ngOnInit(): void {
    const isUserPresent = (localStorage.getItem('token'));
    if (isUserPresent) {
      this.FetchProductsApiService.findUserDetails(isUserPresent)
      .subscribe(res => {
        this.user = res;
        this.userName = this.user.name.firstname;
      });
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/login']);
  }
}
