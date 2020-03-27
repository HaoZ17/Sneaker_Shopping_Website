import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { RegisterInfo } from '../shared/classes/registerInfo';
import {Router} from "@angular/router";

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  @Input() userName: string;
  @Input() pwd: string;
  @Input() emailAddress:string;
  @Input() userID:number;
  @Input() balance:number;
  @Input() shippingAddress:string;
  @Input() phoneNo:string;
  @Input() zipCode:string;
  @Input() country:string;
  private registerInfo:RegisterInfo;

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }
  
  crash(){
    window.location.reload();
  }
  async regist(){
    this.registerInfo={
      userName:this.userName,
      emailAddress:this.emailAddress,
      pwd:this.pwd,
      balance:this.balance,
      shippingAddress:this.shippingAddress,
      phoneNo:this.phoneNo,
      zipCode:this.zipCode,
      country:this.country,
    }
    const promise = new Promise((resolve,reject)=>{
      this.userService.register(this.registerInfo)
      .toPromise()
      .then(
        res=>{
          res=res;
          resolve();
        },
      );
    });
    await promise;
    this.router.navigate(['/login']);
  }

}
