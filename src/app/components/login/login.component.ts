import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import {emailValidation, nameValidation, passwordValidation, phoneValidation} from '../../../config/validation/form.validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersService: UsersService,private _bottomSheet: MatBottomSheet) {

  }

  currentUser = { userName: '' };
  errorMessage="";
  showCart=false;
  
  @Input() userObj = {
    userEmail: '', userPassword: '', userRole: 'USER', userFirstName: '',
    userLastName: '', userPhoneNumber: '', userAddresses: ''
  };

  openBottomSheet(): void {
    
    this._bottomSheet.open(UserCartComponent);
  }

  ngOnInit(): void {
    
    this.UsersService.username.subscribe(user=>{
      this.currentUser.userName=user;
    })
    this.UsersService.loginError.subscribe(error=>{
      this.errorMessage=error;
    })
  }


  signIn() {
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
    this.UsersService.signIn(this.userObj);
    this.setUserName();
  }

  logoutUser() {
    this.UsersService.logoutUser();
  }
  loggedIn() {
    return this.UsersService.loggedIn();
  }

  setUserName() {

    this.currentUser.userName = this.UsersService.getUserName();

  }

  showUserName() {
    console.log(this.UsersService.getUserName());
  }
  showUserCart(){
    this.showCart=!this.showCart;
  }

  openOrderHistory(){
    this._bottomSheet.open(OrderHistoryComponent);
  }

}
