import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from'../classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  login(loginInfo : LoginInfo){
    //console.log(loginInfo.emailAddress+"service");
    return this.http.post<User>(`https://sneakerx-api.azurewebsites.net/api/Server/login`,loginInfo);
  }
}
