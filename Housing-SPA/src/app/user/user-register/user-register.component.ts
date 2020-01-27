import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user = new User();
  userSubmitted: boolean;

  constructor(
    private alertify: AlertifyService,
    private housingService: HousingService) { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
  }

  onSubmit() {  
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
    this.fillUser();
    // this.user = Object.assign(this.user, this.registerationForm.value);
    this.housingService.addUser(this.user);
    this.alertify.success('Congratulation, you are now registered and can add your property for FREE');
    this.registerationForm.reset();
    } else {
      this.alertify.error('Form is not valid, please check the errors')
    }
  }

  fillUser() {
    this.user.userName = this.username.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.mobile = this.mobile.value;
  }

  passwordMatchingValidator(fg: FormGroup) {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }

  // define getter methods for all form fields
  get username() {
    return this.registerationForm.get('username') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }


}
