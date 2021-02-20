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
import { BouquetPageComponent } from '../bouquet-page/bouquet-page.component';
import { BehaviorSubject } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  filteredData:Array<any>;
  data:Array<any>;
  occasions=['BIRTHDAY', 'WEEKEND_VIBES','APOLOGIZE','ROMANTIC','NORMAL','CELEBRATE','CALM','PRETTY_HOUSE'];
  selectedColor:String="";
  smallBouquetsData:Array<any>;
  MediumBouquetsData:Array<any>;
  LargeBouquetsData:Array<any>;
  hugeBouquetsData:Array<any>;
  occasion="";
  rangeVal=0;
  userFilter: any = { bouquetsNames: ''};
  constructor(private UsersService: UsersService, private FlowerBouquetService:FlowerBouquetService, private OrderService:OrdersService,private _bottomSheet: MatBottomSheet) 
    {
      this.filteredData=new Array<any>();
      this.smallBouquetsData = new Array<any>();
      this.MediumBouquetsData = new Array<any>();
      this.LargeBouquetsData = new Array<any>();
      this.hugeBouquetsData = new Array<any>();
      this.data = new Array<any>();
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
  openProductPage(id:string):void{
    this.FlowerBouquetService.setCurrentBouquet(id);
    
    this._bottomSheet.open(BouquetPageComponent);
  }
  loggedIn() {
    return this.UsersService.loggedIn();
  }

  searchBouquets(){
    this.filteredData=[];
    this.FlowerBouquetService.getFlowerBouquets().subscribe((data)=>{
      this.data=data;
      console.log(data);
      this.data.forEach(element => {
        if(this.rangeVal!=0&&this.selectedColor!=""&&this.occasion!="")
        {
          if((element.bouquetPrice)>=this.rangeVal-50 &&(element.bouquetPrice)<=this.rangeVal+50)
              {
                if(this.occasion=="יום הולדת")
                this.occasion='BIRTHDAY';
              if(this.occasion=="התנצלות")
              this.occasion='APOLOGIZE';
                if(this.occasion=="רומנטיקה")
                this.occasion='ROMANTIC';
                if(this.occasion=="רגיל")
                this.occasion='NORMAL';
                if(this.occasion=="לבית")
                this.occasion='PRETTY_HOUSE';
                if(element.bouquetOccasionStyle==this.occasion)
                {
                  if(this.selectedColor=="כחול")
                  this.selectedColor="blue";
                  if(this.selectedColor=="אדום")
                  this.selectedColor="red";
                  if(this.selectedColor=="צהוב")
                  this.selectedColor="yellow";
                  if(this.selectedColor=="ורוד")
                  this.selectedColor="pink";
                  if(this.selectedColor=="סגול")
                  this.selectedColor="purple";
                  if(this.selectedColor=="לבן")
                  this.selectedColor="white";
                  element.bouquetColors.forEach((color:any) => {
                    if(color==this.selectedColor)
                    {
                      this.filteredData.push(element);
                    }
                  });
                }
              }
        }
        else if(this.rangeVal==0&&this.occasion=="")
        {
          if(this.selectedColor=="כחול")
          this.selectedColor="blue";
          if(this.selectedColor=="אדום")
          this.selectedColor="red";
          if(this.selectedColor=="צהוב")
          this.selectedColor="yellow";
          if(this.selectedColor=="ורוד")
          this.selectedColor="pink";
          if(this.selectedColor=="סגול")
          this.selectedColor="purple";
          if(this.selectedColor=="לבן")
          this.selectedColor="white";
          element.bouquetColors.forEach((color:any) => {
            if(color==this.selectedColor)
            {
              this.filteredData.push(element);
            }
          });
        }
       else if(this.rangeVal==0 && this.selectedColor=="")
        {
          if(this.occasion=="יום הולדת")
            this.occasion='BIRTHDAY';
          if(this.occasion=="התנצלות")
          this.occasion='APOLOGIZE';
            if(this.occasion=="רומנטיקה")
            this.occasion='ROMANTIC';
            if(this.occasion=="רגיל")
            this.occasion='NORMAL';
            if(this.occasion=="לבית")
            this.occasion='PRETTY_HOUSE';
            if(element.bouquetOccasionStyle==this.occasion)
            this.filteredData.push(element);
        }
        else if(this.selectedColor==""&&this.occasion=="")
        {
          if((element.bouquetPrice)>=this.rangeVal-50 &&(element.bouquetPrice)<=this.rangeVal+50)
              {
                  this.filteredData.push(element);  
              }
        }
        else if(this.rangeVal==0&&this.occasion=="")
        {
          if(this.selectedColor=="כחול")
              this.selectedColor="blue";
              if(this.selectedColor=="אדום")
              this.selectedColor="red";
              if(this.selectedColor=="צהוב")
              this.selectedColor="yellow";
              if(this.selectedColor=="ורוד")
              this.selectedColor="pink";
              if(this.selectedColor=="סגול")
              this.selectedColor="purple";
              if(this.selectedColor=="לבן")
              this.selectedColor="white";
              element.bouquetColors.forEach((color:any) => {
                if(color==this.selectedColor)
                {
                  this.filteredData.push(element);
                }
              });
        }
        else if(this.rangeVal==0)
        {
          if(this.selectedColor!="" && this.occasion!="")
          {
            if(this.selectedColor=="כחול")
            this.selectedColor="blue";
            if(this.selectedColor=="אדום")
            this.selectedColor="red";
            if(this.selectedColor=="צהוב")
            this.selectedColor="yellow";
            if(this.selectedColor=="ורוד")
            this.selectedColor="pink";
            if(this.selectedColor=="סגול")
            this.selectedColor="purple";
            if(this.selectedColor=="לבן")
            this.selectedColor="white";
            element.bouquetColors.forEach((color:any) => {
              if(color==this.selectedColor)
              {
                if(this.occasion=="יום הולדת")
                this.occasion='BIRTHDAY';
              if(this.occasion=="התנצלות")
              this.occasion='APOLOGIZE';
                if(this.occasion=="רומנטיקה")
                this.occasion='ROMANTIC';
                if(this.occasion=="רגיל")
                this.occasion='NORMAL';
                if(this.occasion=="לבית")
                this.occasion='PRETTY_HOUSE';
                if(element.bouquetOccasionStyle==this.occasion)
                this.filteredData.push(element);
              }
            });
          }
        }
        else if(this.selectedColor=="")
        {
          if(this.rangeVal!=0&&this.occasion!="")
          {
            if((element.bouquetPrice)>=this.rangeVal-50 &&(element.bouquetPrice)<=this.rangeVal+50)
            {
              if(this.occasion=="יום הולדת")
              this.occasion='BIRTHDAY';
            if(this.occasion=="התנצלות")
            this.occasion='APOLOGIZE';
              if(this.occasion=="רומנטיקה")
              this.occasion='ROMANTIC';
              if(this.occasion=="רגיל")
              this.occasion='NORMAL';
              if(this.occasion=="לבית")
              this.occasion='PRETTY_HOUSE';
              if(element.bouquetOccasionStyle==this.occasion)
              this.filteredData.push(element);
            }
          }
        }
        else if(this.occasion=="")
        {
          if(this.rangeVal!=0&&this.selectedColor!="")
          {
            if((element.bouquetPrice)>=this.rangeVal-50 &&(element.bouquetPrice)<=this.rangeVal+50)
            {
              if(this.selectedColor=="כחול")
              this.selectedColor="blue";
              if(this.selectedColor=="אדום")
              this.selectedColor="red";
              if(this.selectedColor=="צהוב")
              this.selectedColor="yellow";
              if(this.selectedColor=="ורוד")
              this.selectedColor="pink";
              if(this.selectedColor=="סגול")
              this.selectedColor="purple";
              if(this.selectedColor=="לבן")
              this.selectedColor="white";
              element.bouquetColors.forEach((color:any) => {
                if(color==this.selectedColor)
                {
                  this.filteredData.push(element);
                }
              });
            }
          }
        }

    

  });
    });
    
    console.log(this.filteredData);

    }

}
