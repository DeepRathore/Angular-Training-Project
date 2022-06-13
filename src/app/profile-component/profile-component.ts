import { Component, OnInit } from '@angular/core';
import {FetchProductsApiService} from '../fetch-products-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-component.html',
  styleUrls: ['./profile-component.scss']
})
export class ProfileComponent implements OnInit {
  public user: any;
  public userFirstName: any;
  public lastName: any;

  constructor(private FetchProductsApiService: FetchProductsApiService) { }

  ngOnInit(): void {
    const isUserPresent = (localStorage.getItem('token'));
    if (isUserPresent) {
      this.FetchProductsApiService.findUserDetails(isUserPresent)
      .subscribe(res => {
        this.user = res;
        this.userFirstName = this.user.name.firstname;
        this.lastName = this.user.name.lastname;
      });
    }
  }

}
