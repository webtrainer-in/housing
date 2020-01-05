import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }

  login(member: any) {
    if (member.userName === 'James') {
      localStorage.setItem('token', '12345');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

}
