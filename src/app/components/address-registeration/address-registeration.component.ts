import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/userAddress';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import {cityValidation, houseValidation, nameValidation, streetValidation} from '../../../config/validation/form.validation';



@Component({
  selector: 'app-address-registeration',
  templateUrl: './address-registeration.component.html',
  styleUrls: ['./address-registeration.component.css']
})
export class AddressRegisterationComponent implements OnInit {
  userAddresses:Address[]=[];
  @Input() userAddress = {
    _id: '', name: '', city: '', street: '', houseNumber:'',
    floorNumber: 0, aptNumber: 0
  };


  errorMessage="";
  currentBouquetId:String="";
  currentUserId:String="";
  currentBouquetPrice=0;
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
  this.UsersService.registerError.subscribe(error=>{
    this.errorMessage=error;
  })
  this.userAddresses=[];
  }
  ngOnInit(): void {
    this.userAddresses=[];
    
  }

  addAddressAndBouquetToCart(){
    const nameV=nameValidation(this.userAddress.name);
    if(!nameV.successful){
      this.errorMessage=nameV.message;
      return;
    }
    const cityV=cityValidation(this.userAddress.city);
    if(!cityV.successful){
      this.errorMessage=cityV.message;
      return;
    }
    const streetV=streetValidation(this.userAddress.street);
    if(!streetV.successful){
      this.errorMessage=streetV.message;
      return;
    }
    const houseV=houseValidation(this.userAddress.houseNumber);
    if(!houseV.successful){
      this.errorMessage=houseV.message;
      return;
    }
    this.UsersService.addAddress(this.currentUserId,this.userAddress);
    this.OrderService.addOrderToCart(this.currentUserId,this.currentBouquetId,this.currentBouquetPrice,this.userAddress);
    this.openBottomSheet();

  }
  
  openBottomSheet(){
    this._bottomSheet.open(ActionApproveComponent);
  }

}
