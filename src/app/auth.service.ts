import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: any;

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    this.token = localStorage.getItem('token');
    return this.token && this.token.length > 0;
  }
}
