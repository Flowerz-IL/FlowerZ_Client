import { Component, OnInit } from '@angular/core';
import { FlowerBouquet } from 'src/app/models/flowerBouquet';
import { FindMeComponent } from '../find-me/find-me.component';
import {FlowerBouquetService} from '../../services/flower-bouquet.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import { OrderComponent } from '../order/order.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-bouquet-page',
  templateUrl: './bouquet-page.component.html',
  styleUrls: ['./bouquet-page.component.css']
})
export class BouquetPageComponent implements OnInit {
  currentBouquetId="";
  currentBouquet:FlowerBouquet | undefined;
  bouquetImgUrl="";
  bouquetDes="";
  bouquetPrice=0;
  bouquetName="";

  constructor(private UsersService:UsersService,private FlowerBouquetService:FlowerBouquetService,private OrderService:OrdersService,private _bottomSheet: MatBottomSheet) {
    this.FlowerBouquetService.currentBouquetId.subscribe(bouquet=>{
      this.currentBouquetId=bouquet;
    }) 
    
  }

  ngOnInit(): void {    
    this.FlowerBouquetService.getFlowerBouquet(this.currentBouquetId).subscribe((data:any)=>{
      console.log(data);
      this.bouquetImgUrl=data.bouquetImageUrl;
      this.bouquetName=data.bouquetName;
      this.bouquetDes=data.bouquetDescription;
      this.bouquetPrice=data.bouquetPrice;
      console.log(this.bouquetPrice);
    })
  }
  chosenBouquet(bouquetid:String,bouquetPrice:number){
    console.log(bouquetid);
    this.OrderService.currentBouquetId.next(bouquetid);
    this.OrderService.currentBouquetPrice.next(bouquetPrice);
    this.openOrderSheet();
  }

    openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }
  openOrderSheet(): void {
    
    this._bottomSheet.open(OrderComponent);
    
  }
  loggedIn() {
    return this.UsersService.loggedIn();
  }


}
