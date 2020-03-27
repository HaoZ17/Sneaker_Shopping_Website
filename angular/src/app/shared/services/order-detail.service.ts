import { Injectable } from '@angular/core';
import { OrderInfo } from '../classes/OrderInfo';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }

  orderDetails : Array<OrderInfo> = [];

  setDetails(details : OrderInfo[]):any{
    this.orderDetails = [];
    for(var i = 0; i < details.length-1; i++){
      this.orderDetails.push(details[i]);
    }
      this.orderDetails.push(details[i]);
    console.log(this.orderDetails);
    //return this.orderDetails;
  }

  sendDetails(): any{
    return this.orderDetails;
  }
}
