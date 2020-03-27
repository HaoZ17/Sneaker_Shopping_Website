import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, using, from } from 'rxjs';
import userModel from '../classes/userModel';
import {User} from '../classes/User';
import { LoginInfo } from '../../shared/classes/LoginInfo';
import { RegisterInfo } from '../classes/registerInfo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};




@Injectable({
  providedIn: 'root'
})
export class UserService {
public user=userModel;
  constructor(
    private http: HttpClient,
  ) { }


  updatePwd(user:User){
    const url = `https://sneakerx-api.azurewebsites.net/api/Server/newPassword`;
    return this.http.post(url,user);

  }

  register(registerInfo:RegisterInfo){
    const url=`https://sneakerx-api.azurewebsites.net/api/Server/register`;
    return this.http.post(url,registerInfo);

  }

  
}
