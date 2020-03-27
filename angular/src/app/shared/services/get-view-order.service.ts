import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderInfo } from '../classes/OrderInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetViewOrderService {

  vieworders : Array<OrderInfo> = [];
  constructor(
    
  ) { }

  getViewOrders(orders : OrderInfo[]): any{
    
    for(var i = 0; i < orders.length-1; i++){
      for(var j = 0; j < this.vieworders.length-1; j++){
        if(orders[i].orderID != this.vieworders[j].orderID) 
          this.vieworders.push(orders[i]);
        else continue;
      }
    }
    console.log(this.vieworders);
    return this.vieworders;
  }
}
