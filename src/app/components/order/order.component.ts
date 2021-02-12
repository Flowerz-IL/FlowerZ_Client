import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import {Address} from '../../models/userAddress'
import { OrdersService } from 'src/app/services/orders.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import { AddressRegisterationComponent } from '../address-registeration/address-registeration.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userAddresses:Address[];
  
  currentBouquetId:String="";
  currentUserId:String="";
  currentBouquetPrice=0;
  currentAddress:Address={
    _id:"",
    name:"",
    city:"",
    street:"",
    houseNumber:"",
    floorNumber: 0,
    aptNumber: 0
  };

  constructor(private UsersService: UsersService,private OrderService:OrdersService,private _bottomSheet: MatBottomSheet,
    private router: Router) { 
  this.OrderService.currentBouquetId.subscribe(bouquet=>{
  this.currentBouquetId=bouquet;
  this.UsersService.userId.subscribe(user=>{
    this.currentUserId=user;
   })
   this.OrderService.currentBouquetPrice.subscribe(bouquet=>{
     this.currentBouquetPrice=bouquet;
   })
  })
  this.userAddresses=[];

    }
    
    addBouquetToCart(addressId:String){
      this.userAddresses.forEach(element => {
        if(element._id==addressId)
        {
          this.currentAddress=element;
        }
      });
      this.OrderService.addOrderToCart(this.currentUserId,this.currentBouquetId,this.currentBouquetPrice,this.currentAddress);
      this.openBottomSheet();
    }

  ngOnInit(): void {
    this.userAddresses=[];
    this.userAddresses=this.UsersService.getUserAddresses(this.currentUserId);
  }
  openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }
  
  openAddressSheet():void{
    this._bottomSheet.open(AddressRegisterationComponent);

  }

}
