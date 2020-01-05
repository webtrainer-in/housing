import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  member: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (this.authService.login(this.member)){
      console.log('Logged in Successfully');
      form.reset();
    } else {
      console.log('Failed to logged in');
    }
  }

  onLogout() {
    this.authService.logout();
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
