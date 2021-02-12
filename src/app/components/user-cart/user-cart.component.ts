import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { OrdersService} from '../../services/orders.service';
import { Order } from '../../models/order';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActionApproveComponent } from '../action-approve/action-approve.component';
import { OrderPaymentComponent } from '../order-payment/order-payment.component';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  resetCart() {
    this.userCart=[];
  }
  userCart:Order[];
  constructor(private orderService: OrdersService, private userService:UsersService,private _bottomSheet: MatBottomSheet) {

    this.userCart=[];
  }

  ngOnInit(): void {
    this.userCart=[];
    this.getCart();
  }
  
  getCart(){
      this.userCart=this.orderService.getUserCart();
    console.log(this.userCart);
  }
  


  loggedIn() {
    return this.userService.loggedIn();
  }

  deleteFromCart(id:String){
    this.orderService.deleteOrder(id);
    this.openBottomSheet();
  }

  openBottomSheet(): void {
    
    this._bottomSheet.open(ActionApproveComponent);
  }

  orderConfirmation():void{
    this.userCart.forEach(element => {
      this.orderService.confirmOrder(element._id);
    });
    this._bottomSheet.open(OrderPaymentComponent);
  }


  
}
