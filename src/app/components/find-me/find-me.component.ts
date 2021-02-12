import { Component, OnInit, Output } from '@angular/core';
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
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.css'],
  animations:[
    trigger('position',[
     state('move',style({
       height:'200px',
       opacity:1,
     }))
    ]),
  ]
})
export class FindMeComponent implements OnInit  {
  data:Array<any>;
  counter:number;
  rangeVal=0;
  bouquetId="";
  selectedColor:String="";
  selectedColor2:String="";
  occasions=['BIRTHDAY', 'WEEKEND_VIBES','APOLOGIZE','ROMANTIC','NORMAL','CELEBRATE','CALM','PRETTY_HOUSE'];
  filteredData:Array<any>;
  currentUser = { userId: '' };
  position="notStarted";

  constructor(private UsersService: UsersService, private FlowerBouquetService:FlowerBouquetService, private OrderService:OrdersService,private _bottomSheet: MatBottomSheet) {
    this.data = new Array<any>();
    this.counter=0;
    this.rangeVal=0;

    this.filteredData=new Array<any>();
   }
  ngOnInit(): void {
    this.getFlowerBouquetsFromServer();  
    this.UsersService.userId.subscribe(user=>{
      this.currentUser.userId=user;
    })

  }
   
   onClick(){
     this.counter++;

   }

   reset(){
     this.counter=0;
     this.filteredData=new Array<any>();

   }
  getFlowerBouquetsFromServer(){
    this.FlowerBouquetService.getFlowerBouquets().subscribe((data)=>{
    this.data=data;
    console.log(this.data);
  });
  }
  arrangeOccasions(occasion:string){
    const index: number = this.occasions.indexOf(occasion);
    if (index !== -1) {
        this.occasions.splice(index, 1);
    }     
  }
  chosenBouquet(bouquetid:String,bouquetPrice:number){
    console.log(bouquetid);
    this.OrderService.currentBouquetId.next(bouquetid);
    this.OrderService.currentBouquetPrice.next(bouquetPrice);
    this.openOrderSheet();



  }
  chosenBouquets(){
    this.counter++;
    this.data.forEach(element => {
      if(element.bouquetPrice<=this.rangeVal+50 && element.bouquetPrice>=this.rangeVal-50 )
      {
        if(element.bouquetColors[0]==this.selectedColor ||element.bouquetColors[1]==this.selectedColor|| element.bouquetColors[0]==this.selectedColor2 ||element.bouquetColors[1]==this.selectedColor2||element.bouquetColors[3]==this.selectedColor2 ||element.bouquetColors[3]==this.selectedColor)
        {
          this.occasions.forEach(occasion => {
            if(element.bouquetOccasionStyle==occasion)
            {
              this.filteredData.push(element);
            }
          });
        }
      }
      
    })
    console.log(this.filteredData);
  
  }

  changePosition(newPosition:string){
    this.position=newPosition;
    this.counter++;
  }
  openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }
  openOrderSheet(): void {
    
    this._bottomSheet.open(OrderComponent);
    
  }

}






