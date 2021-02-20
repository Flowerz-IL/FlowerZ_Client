import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UsersService } from 'src/app/services/users.service';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import {emailValidation, nameValidation, passwordValidation, phoneValidation} from '../../../config/validation/form.validation';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  errorMessage="";
  @Input() userObj = {
    userEmail: '', userPassword: '', userRole: 'USER', userFirstName: '',
    userLastName: '', userPhoneNumber: '', userAddresses: ''
  };
  constructor(private userService:UsersService,private _bottomSheet:MatBottomSheet) { }

  ngOnInit(): void {
    this.errorMessage="";
  }

  updateEmail(){
    const emailV = emailValidation(this.userObj.userEmail);
    if(!emailV.successful){
      this.errorMessage = emailV.message;
      return;
    }
    this.userService.updateEmail(this.userObj.userEmail);
    this.openBottomSheet();
  }
  updateName(){
    const nameV=nameValidation(this.userObj.userFirstName);
    if(!nameV.successful){
      this.errorMessage=nameV.message;
      return;
    }
    const LastNameV=nameValidation(this.userObj.userLastName);
    if(!nameV.successful){
      this.errorMessage=nameV.message;
      return;
    }
    this.userService.updateName(this.userObj.userFirstName,this.userObj.userLastName);
    this.openBottomSheet();

  }
  updatePassword(){
    const passwordV=passwordValidation(this.userObj.userPassword);
    if(!passwordV.successful){
      this.errorMessage=passwordV.message;
      return;
    }
    this.userService.updatePassword(this.userObj.userPassword);
  }
  openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }
  loggedIn() {
    return this.userService.loggedIn();
  }
}
