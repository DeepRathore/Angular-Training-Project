import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  window: any = window;

  constructor() { }

  getCurrentUser() {
    let user = this.window['user'];
    return user && user.id;
  }
}
