import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  member: any = {};
  showNavbar = false;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (this.authService.login(this.member)){
      this.alertify.success('Logged in Successfully');
      form.reset();
    } else {
      this.alertify.error('User ID or password is wrong, you can use James as user and password any to login as guest');
    }
  }

  onLogout() {
    this.authService.logout();
    this.alertify.success('Logged out Successful')
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  onToggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
