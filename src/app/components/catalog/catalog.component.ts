import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { from } from 'rxjs';
import {FlowerBouquetService} from '../../services/flower-bouquet.service';
import {FlowerBouquet} from 'src/app/models/flowerBouquet';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from '../../services/users.service'
import { style, trigger,state, transition,animate } from '@angular/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import { OrderComponent } from '../order/order.component';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  filteredData:Array<any>;
  smallBouquetsData:Array<any>;
  MediumBouquetsData:Array<any>;
  LargeBouquetsData:Array<any>;
  hugeBouquetsData:Array<any>;

  userFilter: any = { bouquetsNames: ''};

  constructor(private UsersService: UsersService, private FlowerBouquetService:FlowerBouquetService, private OrderService:OrdersService,private _bottomSheet: MatBottomSheet) 
    {
      this.filteredData=new Array<any>();
      this.smallBouquetsData = new Array<any>();
      this.MediumBouquetsData = new Array<any>();
      this.LargeBouquetsData = new Array<any>();
      this.hugeBouquetsData = new Array<any>();


    }

  ngOnInit(): void {
    this.getFlowerBouquetsFromServer();  

  }
  getFlowerBouquetsFromServer(){
    this.FlowerBouquetService.groupByFlowersBouquets().subscribe((data:any)=>{
      console.log(data);
    data.result.forEach((element: any) => {
      if(element._id=="S")
      {
        this.smallBouquetsData.push(element);
        console.log(this.smallBouquetsData);

      }
      else if(element._id=="M")
      {
        this.MediumBouquetsData.push(element);

      }
      else if(element._id=="L")
      {
        this.LargeBouquetsData.push(element);

      }
      else if(element._id=="XXL")
      {
        this.hugeBouquetsData.push(element);

      }
    });
    console.log(this.LargeBouquetsData);

  });

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

}
