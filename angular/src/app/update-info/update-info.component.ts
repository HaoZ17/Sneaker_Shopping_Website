import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/classes/User';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service';
import {Router} from "@angular/router";
import { CardInfo } from '../shared/classes/cardInfo';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  @Input() pwd1: string;
  @Input() pwd2: string;
  @Input() cardNo:string;
  @Input() cardPwd:string;
  @Input() cardName:string;
  @Input() cardBalance:number;
  @Input() cardMonth:number;
  @Input() cardYear:number;
  @Input() cardCvc:string;
  @Input() chargeAmount:string;

  public user:User;
  private cardInfo:CardInfo;

  constructor(
    private userService: UserService,
    private userInfoDetailsService:UserInfoDetailsService,
    private router:Router,
    private cardService:CardService
  ) { }

  ngOnInit() {
    this.user=this.userInfoDetailsService.getUserInfoDetails();
  }

  crash(){
    window.location.reload();
  }

  isSame(){
    if(this.pwd1=="" || this.pwd2==""){
      alert("Please input the password!");
    }else if(this.pwd1!=this.pwd2){
      alert("Password is not equal, please try again!");
    }else{
      this.updatePwd(this.pwd1);
    }
  }

  async updatePwd(value) {
    this.user.pwd=value;
    const promise = new Promise((resolve, reject) => {
      this.userService.updatePwd(this.user)
        .toPromise()
        .then(
          res => { // Success
            
            res = res;
            resolve();
          },         
        );
    });
    await promise;
    alert("Password update successfully, please login again");
    this.router.navigate(['/login']);
  }

  async charge(cardInfo){
    const promise=new Promise((resolve,reject)=>{
      this.cardService.charge(cardInfo)
      .toPromise()
      .then(
        res=>{//Success
          res=res;
          resolve();
        },
      );
    });
    await promise;
    console.log("in the charge async function");
  }

  async updateBalance(){
    this.cardInfo={
      cardNo:this.cardNo,
      cardPwd:this.cardPwd,
      cardName:this.cardName,
      cardBalance:this.cardBalance,
      cardMonth:this.cardMonth,
      cardYear:this.cardYear,
      cardCvc:this.cardCvc
    }
    this.charge(this.cardInfo);
    var _chargeAmount = parseInt( this.chargeAmount);
    this.user.balance=this.user.balance  +_chargeAmount;
    const promise=new Promise((resolve,reject)=>{
      this.cardService.updateBalance(this.user)
      .toPromise()
      .then(
        res=>{
          res=res;
          resolve();
          console.log("in the updateBalance function");
        },
      );
    });
    await promise;
    console.log("updateBalnce promise done");
    alert("add balance successfully");
    this.router.navigate(['/home']);
  }

  toHome(){
    this.router.navigate(['/home']);
  }
}
