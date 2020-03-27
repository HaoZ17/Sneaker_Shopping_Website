import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, using, from } from 'rxjs';
import userModel from '../classes/userModel';
import {User} from '../classes/User';
import { CartInfo } from '../classes/cartInfo';
import { LoginInfo } from '../../shared/classes/LoginInfo';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartInfo: CartInfo;
  public _total:number=null;;

  constructor(
    private http: HttpClient,
    ) { }

    addCart(cartInfo:CartInfo) {
      console.log(this.http);
      const url = `https://sneakerx-api.azurewebsites.net/api/Server/toCart`;
      console.log(url);
      console.log("userID:"+cartInfo.userID+"+itemID:"+cartInfo.itemID+"+itemName:"+cartInfo.itemName);
      return this.http.post(url, cartInfo);
    }

    getCart(userId:number): Observable<CartInfo[]> {
      const url = `https://sneakerx-api.azurewebsites.net/api/Server/cartInfo`;
      // const uri = decodeURIComponent(
      //   `${Constants.locationAPIUrl}api/Student/GetCartAsync`
      //   // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
      // );
      console.log('before post'+userId);
      return this.http.post<CartInfo[]>(url,userId);
    }

    check(userId:number): Observable<number> {
      const url = `https://sneakerx-api.azurewebsites.net/api/Server/checkOut`;
      // const uri = decodeURIComponent(
      //   `${Constants.locationAPIUrl}api/Student/GetCartAsync`
      //   // ${Constants.locationAPIUrl}/api/items?apikey=${Constants.apiKey}`
      // );
      console.log('before post'+userId);
      return this.http.post<number>(url,userId);
    }

    set(value){
      this._total=value;
    }

    get(){
      return this._total;
    }

}
