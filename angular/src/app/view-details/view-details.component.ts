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
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  details: Array<OrderInfo> = []
  user: User;

  constructor(
    public orderDetailService: OrderDetailService,
    public router: Router,
  ) { }

  ngOnInit(

  ) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(this.details);
    this.viewDetails();
    console.log(this.details);
  }

  viewDetails() {
    // const promise = new Promise((resolve, reject) => {
    this.details = this.orderDetailService.sendDetails();
    //   .toPromise()
    //     .then(
    //       res => { // Success           
    //         this.details = res;
    //         resolve();
    //       },         
    //     );
    // });
    // await promise;
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
