import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  member = new User();
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const user = this.authService.login(this.member);
    if (user) {
      this.alertify.success('Successfully logged in');
      form.reset();
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User ID or password is wrong');
    }
  }

}
