import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderInfo } from '../classes/OrderInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllOrdersService {

  constructor(
    private http:HttpClient
  ) { }

  getAllOrders(userID : number): Observable<OrderInfo[]>{
    console.log(userID);
    return this.http.post<OrderInfo[]>(`https://sneakerx-api.azurewebsites.net/api/Server/myOrder`,userID);
  }
}
