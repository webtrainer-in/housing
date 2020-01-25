import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }

  login(member: any) {
    let user = this.getUser(member);
    if (user) {
      localStorage.setItem('token', user.username);
    }
    return user;
  }

  logout() {
    localStorage.removeItem('token');
  }

  // Get single user
  getUser(user: string) {
        let UsersArray = [];
        if (localStorage.getItem('Users')) {
          UsersArray = JSON.parse(localStorage.getItem('Users'));
        }
        console.log ('heheheh');
        console.log(user);
        console.log(UsersArray.find(p => p.username === user.userName && p.userPassword === user.password));
        return UsersArray.find(p => p.username === user.userName && p.userPassword === user.password );
  }

}
