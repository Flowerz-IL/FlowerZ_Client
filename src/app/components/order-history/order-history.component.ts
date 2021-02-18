import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {


  userOrders: any[];
  currentUser = { userId: '' };
  
  
  constructor(private UsersService: UsersService,private _bottomSheet: MatBottomSheet,private OrderService:OrdersService) {
    this.UsersService.userId.subscribe(user=>{
      this.currentUser.userId=user;
    });
    this.userOrders = new Array<any>();


  }

  ngOnInit(): void {
    this.userOrders=this.OrderService.getUserOrders();
    console.log(this.userOrders);
  }

}
