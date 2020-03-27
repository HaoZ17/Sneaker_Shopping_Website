import { Component, OnInit} from '@angular/core';
import { CartInfo } from '../shared/classes/cartInfo';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service';
import { User } from '../shared/classes/User';
import {CartService } from '../shared/services/cart.service';
import {Router} from "@angular/router";
import userModel from '../shared/classes/userModel';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartInfos: Array<CartInfo> = [];
  private b: Array<number> = [];
  public user:User;
  private totalCost:number=0;
  constructor(
    private cartService: CartService,
    private userInfoDetailsService: UserInfoDetailsService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.user = this.userInfoDetailsService.getUserInfoDetails();
    this.getCartInfo();
  }


  async getCartInfo() {
    console.log(this.user.userID);
    const promise = new Promise((resolve, reject) => {
      this.cartService.getCart(this.user.userID)
        .toPromise()
        .then(
          res => { // Success
            
            this.cartInfos=res;
            console.log("!!!!"+this.cartInfos);
            resolve();
          },         
        );
    });
    await promise;
    console.log(this.cartInfos);
  }

  move(value){
    const cartInfo = {
      userID:this.user.userID,
      itemID:value.itemID,
      itemName:value.itemName,
      itemSize:value.itemSize,
      itemInCartAmount:-1,
      price:value.price,
      picLink:value.picLink
    }
    this.cartService.addCart(cartInfo).subscribe();
    alert("remove successfully");
    this.router.navigate(['/cart1']);
  }

  async checkOut() {
    console.log(this.user.userID);
    this.getCartInfo();
    for(var _i=0;_i<this.cartInfos.length;_i++){
      this.totalCost=this.totalCost+this.cartInfos[_i].price;
      console.log("in checkout:"+this.totalCost);
    }
    console.log("after count checkout:"+this.totalCost);
    console.log("old balance:"+this.user.balance);
    if(this.totalCost>this.user.balance){
      alert("sorry");
    }else if(this.totalCost=0){
      alert("You didn't add any item, keep shopping!");
    }else{
      const promise = new Promise((resolve, reject) => {
      this.cartService.check(this.user.userID)
        .toPromise()
        .then(
          res => { // Success           
            this.user.balance = res;
            resolve();
          },         
        );
    });
    await promise;
    console.log("after checkout:"+this.user.balance);
    // alert("checkout successfully");
    this.router.navigate(['/game']);
    }
  }

  toGame(){
    this.router.navigate(['/game']);
  }

  toHome(){
    this.router.navigate(['/home']);
  }

  logOut(){
    this.user=userModel;
    this.router.navigate(['/login']);
  }

}
