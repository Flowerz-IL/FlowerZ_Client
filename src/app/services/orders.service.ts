import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order';
import { Address } from '../models/userAddress';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  userCart:Order[];
  currentBouquetId=new BehaviorSubject<any>("");
  currentBouquetPrice=new BehaviorSubject<any>(0);
  baseUrl= 'http://localHost:8080/api/orders';
  Orders:Order[];

  constructor(private http :HttpClient, private router:Router) {
    this.userCart=[];
    this.Orders=[];
  }


  confirmOrder(_id: String) {
    this.http.patch(this.baseUrl+'/'+_id,{
      isOrderActive:true
    }).subscribe((data:any)=>{
      console.log(data);
    })
  }


  deleteOrder(id: String) {
    this.http.delete(this.baseUrl+'/'+id).subscribe((data:any)=>{
      console.log(data);
    }
    );
  }
 
  getUserCart(): Order[] {
    this.userCart=[];
    this.http.get<any>(this.baseUrl).subscribe((data:any)=>{
     data.forEach((element: any) => {
      if(element.userId==localStorage.getItem('UserId'))
      {
        if(element.isOrderActive==false)
        {
          this.userCart.push(element);
          console.log(element);
        }
      }
     });
   
    });

    return this.userCart;
  }


  getAllOrders(): Order[]{
    this.Orders=[];
    this.http.get<any>(this.baseUrl).subscribe((data:any)=>{
      data.forEach((element:any) => {
      this.Orders.push(element);        
      });
    });
    return this.Orders;
     
  }
  getUserOrders(): Order[]{
    this.Orders=[];
    this.http.get<any>(this.baseUrl).subscribe((data:any)=>{
      data.forEach((element:any) => {
        if(element.userId==localStorage.getItem('UserId'))
        {
        
            this.Orders.push(element);
            console.log(element);
          
        }
       });
     
        });
    return this.Orders;
     
  }

  addOrderToCart(userId:String,bouquetId:String,bouquetPrice:number,address:Address){
    
    this.http.post<Order>(this.baseUrl,{
      userId: userId, 
      orderAddress: {
        _id:address._id,
        name: address.name,
        city: address.city,
        street: address.street,
        houseNumber: address.houseNumber,
        floorNumber: address.floorNumber,
        aptNumber: address.aptNumber
      },
      orderFrequency: 1, 
      isOrderActive: "false", 
      orderFlowerBouquetIds: [{
          flowerBouquetId: bouquetId,
          bouquetAmount: 1
      }],
         orderTotalSum:bouquetPrice,
      providerId:"-"
    }).subscribe((data:any)=>
    {
      console.log(data);
    }
    )
  }

  setBouquetId(id:String){
    this.currentBouquetId.next(id);
  }
  

}
