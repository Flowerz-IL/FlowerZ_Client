import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UsersService } from 'src/app/services/users.service';
import { ActionApproveComponent } from '../action-approve/action-approve.component';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  @Input() userObj = {
    userEmail: '', userPassword: '', userRole: 'USER', userFirstName: '',
    userLastName: '', userPhoneNumber: '', userAddresses: ''
  };
  constructor(private userService:UsersService,private _bottomSheet:MatBottomSheet) { }

  ngOnInit(): void {
  }

  updateEmail(){
    this.userService.updateEmail(this.userObj.userEmail);
    this.openBottomSheet();
  }
  updateName(){
    this.userService.updateName(this.userObj.userFirstName,this.userObj.userLastName);

  }
  updatePassword(){
    this.userService.updatePassword(this.userObj.userPassword);
  }
  openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }
}
