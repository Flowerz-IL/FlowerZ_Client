import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import {emailValidation, nameValidation, passwordValidation, phoneValidation} from '../../../config/validation/form.validation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage = '';

  @Input() userObj = {
    userEmail: '',
    userPassword: '',
    userRole: 'USER',
    userFirstName: '',
    userLastName: '',
    userPhoneNumber: '',
    userAddresses: '',
  };

  constructor(private UsersService: UsersService, public router: Router) {}

  ngOnInit(): void {
    this.UsersService.registerError.subscribe((error) => {
      this.errorMessage = error;
    });
  }

  addUser(data: any) {
    const emailV = emailValidation(this.userObj.userEmail);
    if(!emailV.successful){
      this.errorMessage = emailV.message;
      return;
    }
    const passwordV=passwordValidation(this.userObj.userPassword);
    if(!passwordV.successful){
      this.errorMessage=passwordV.message;
      return;
    }
    const nameV=nameValidation(this.userObj.userFirstName);
    if(!nameV.successful){
      this.errorMessage=nameV.message;
      return;
    }
    const lastNameV=nameValidation(this.userObj.userLastName);
    if(!lastNameV.successful){
      this.errorMessage=lastNameV.message;
      return;
    }
    const phoneV = phoneValidation(this.userObj.userPhoneNumber);
    if(!phoneV.successful){
      this.errorMessage=phoneV.message;
      return;
    }
  
      this.UsersService.addUser(this.userObj);
  }
}
