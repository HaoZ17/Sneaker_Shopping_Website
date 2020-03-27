import userModel from '../shared/classes/userModel';
import { Component, OnInit } from '@angular/core';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service'
import { GetAllOrdersService } from '../shared/services/get-all-orders.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from '../shared/classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../shared/classes/User';
import { Router } from '@angular/router';
import { Alert, promise } from 'selenium-webdriver';
import { OrderInfo } from '../shared/classes/OrderInfo';
import { OrderDetailService } from '../shared/services/order-detail.service';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
  providers: [
    OrderInfo // added class in the providers
  ]
})
export class OrderHistoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public orderInfo: OrderInfo,
    public userInfoDetailsService: UserInfoDetailsService,
    public getAllOrdersService: GetAllOrdersService,
    public orderDetailService: OrderDetailService,
    public router: Router
  ) {
  }

  viewdetailsForm = this.fb.group({
    orderID: [''],
    orderDate: [''],
    totalCost: ['']
  })

  public user: User = this.userInfoDetailsService.getUserInfoDetails();
  orders: Array<OrderInfo> = [];
  vieworders: Array<OrderInfo> = [];
  details: Array<OrderInfo> = [];
  userID: number = userModel.userID;


  ngOnInit() {
    console.log(this.user.balance);
    console.log(this.userID);
    this.getOrders();
    //console.log(this.orders[1].itemName);
  }

  async getOrders() {
    const promise_1 = new Promise((resolve, reject) => {
      this.getAllOrdersService.getAllOrders(this.userID)
        .toPromise()
        .then(
          res => { // Success           
            this.orders = res;
            resolve();
          },
        );
    });
    await promise_1;

    let dict = {}

    this.orders.forEach(element => {
      if (!dict[element.orderID]){
        dict[element.orderID] = element;
      }
    });
    Object.keys(dict).forEach(element => {
      console.log('my dict: '+dict[element].orderID);
    });
    if (Object.keys(dict).length === 0){
      alert("Oh, you haven't buy anything here, go and get some cool sneakers!");
    }else{
      Object.keys(dict).forEach(element => {
        this.vieworders.push(dict[element]);
      });
    }
    // //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! this need navigate to homepage !!!!!!!!!!!!!!!!!!!!!!!!!!
    // if (this.orders.length == 0) {
    //   alert("Oh, you haven't buy anything here, go and get some cool sneakers!");
    // }
    // // else if(this.orders.length == 1){
    // //   if(this.orders[0].orderID == this.orders[1].orderID) this.vieworders.push(this.orders[0]);
    // //   else {
    // //     this.vieworders.push(this.orders[0]);
    // //     this.vieworders.push(this.orders[1]);
    // //   }
    // // }
    // else {
    //   for (var i = 0; i < this.orders.length - 1; i++) {
    //     if (this.orders[i].orderID != this.orders[i + 1].orderID) {
    //       this.vieworders.push(this.orders[i]);
    //     }
    //   }
    //   this.vieworders.push(this.orders[this.orders.length - 1]);
    // }
  }
  //!!!!!!!!!!!!!!!!!!!!!!!!!! this needs to be linked with details component !!!!!!!!!!!!!!!
  viewdetails(data) {
    this.details = [];
    console.log('view order detail of:', data.orderID);
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].orderID === data.orderID) {
        console.log('add view :', this.orders[i].orderID);
        this.details.push(this.orders[i]);
      }
    }

    // const promise_2 = new Promise((resolve, reject) => {
    this.orderDetailService.setDetails(this.details);
    //   .toPromise()
    //     .then(
    //       res => { // Success
    //         this.details = res;
    //         resolve();
    //       },         
    //     );
    // });
    // await promise_2;
    console.log("*********************");
    console.log(this.details);
    this.router.navigate(['/orderDetails']);

  }

  toHome() {
    this.router.navigate(['/home']);
  }

  logOut() {
    this.user = userModel;
    this.router.navigate(['/login']);
  }

  crash(){
    window.location.reload();
  }

}
