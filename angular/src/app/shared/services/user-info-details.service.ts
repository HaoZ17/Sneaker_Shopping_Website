import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from'../classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User} from '../classes/User';
import userModel from '../classes/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserInfoDetailsService {

  constructor() { }

  user : User;

  setUserInfoDetails(user : User){
    //console.log(user.balance+" service");
        userModel.balance = user.balance;
        userModel.country = user.country;
        userModel.emailAddress = user.emailAddress;
        userModel.phoneNo = user.phoneNo;
        userModel.pwd = user.pwd;
        userModel.shippingAddress = user.shippingAddress;
        userModel.userID = user.userID;
        userModel.userName = user.userName;
        userModel.zipCode = user.zipCode;
  }

  getUserInfoDetails(){
    return userModel;
  }
}
