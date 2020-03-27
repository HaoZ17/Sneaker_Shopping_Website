import { Injectable } from '@angular/core';
import { CardInfo } from '../classes/cardInfo';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http:HttpClient
  ) { }

  charge(cardInfo:CardInfo) {
    console.log(this.http);
    const url = `https://sneakerx-api.azurewebsites.net/api/Server/Charge`;
    console.log(url);
    return this.http.post(url,cardInfo);
  }

  updateBalance(user:User){
    console.log(this.http);
    const url=`https://sneakerx-api.azurewebsites.net/api/Server/balanceUpdate`;
    console.log(url);
    return this.http.post(url,user);
  }
}
