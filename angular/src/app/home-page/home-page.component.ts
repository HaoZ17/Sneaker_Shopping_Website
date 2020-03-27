import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../../app/shared/services/item.service';
import { Item } from '../shared/classes/item';
import { CartInfo } from '../shared/classes/cartInfo';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service';
import { User } from '../shared/classes/User';
import { CartService } from '../shared/services/cart.service';
import {Router} from "@angular/router";
import userModel from '../shared/classes/userModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  shopForm: FormGroup;
  public items: Array<Item> = [];
  public cartInfo:CartInfo;
  public user:User;

  constructor(
    private fb: FormBuilder, 
    private itemService: ItemService,
    private userInfoDetailsService: UserInfoDetailsService,
    private cartService: CartService,
    private router: Router,
    ) {
    this.shopForm = this.fb.group({
      searchForm: this.fb.group({
        item: [null],
        price: [null, [Validators.required]],
        junk: [null],
      })
    });
   }

  ngOnInit() {
    this.getItems();
    this.user = this.userInfoDetailsService.getUserInfoDetails();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addCart(value){
    // console.log("value is:"+value);
    // console.log("userID is: "+this.user.userID);
    const cartInfo = {
      userID:this.user.userID,
      itemID:value.itemID,
      itemName:value.itemName,
      itemSize:value.itemSize,
      itemInCartAmount:1,
      price:value.price,
      picLink:value.picLink
    }
    console.log("viewing add cartInfo:"+cartInfo);
    
    // console.log(cartInfo);
    // console.log("userID:"+cartInfo.userID+"+itemID:"+cartInfo.itemID+"+itemName:"+cartInfo.itemName);
    
    this.cartService.addCart(cartInfo).subscribe();
    alert("add successfully");
  }

  toCart(){
    this.router.navigate(['/cart']);
  }

  toPersonInfo(){
    this.router.navigate(['/update'])
  }

  crash(){
    window.location.reload();
  }
  toHome(){
    this.router.navigate(['/home']);
  }

  logOut(){
    this.user=userModel;
    this.router.navigate(['/login']);
  }

  toHistory(){
    this.router.navigate(['/orderHistory']);
  }

}
