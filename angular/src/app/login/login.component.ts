import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from '../shared/classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service'
import { User } from '../shared/classes/User';
import userModel from '../shared/classes/userModel';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
// import  'angular-base64/angular-base64'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Sneaker Website Login Page";
  user:User;

  loginInfoForm = this.fb.group({
    emailAddress: [''],
    password: ['']
  })

  loginInfo: LoginInfo;
  

  constructor(private fb: FormBuilder, private loginService: LoginService, private router : Router, public userInfoDetailsService: UserInfoDetailsService) {
    // console.log("Try to get API");
    // this.loginInfo = new LoginInfo(this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
    // this.conacts();
    // this.onLogin();
  }

  ngOnInit(){

  }

  // conacts(){
  //   console.log(this.loginInfo.emailAddress+"1");
  //   this.onLogin().subscribe(loginInfo =>{ loginInfo = loginInfo;
  //   })
  // }

  async onLogin() {
    if(this.loginInfoForm.value.emailAddress == '' || this.loginInfoForm.value.password == '')
    {
      alert("All fields are required, please try again!");
    }
    else{
    this.loginInfo = new LoginInfo(this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
    //console.log(this.loginInfo.emailAddress);
    //var _pwd =new Base64.encode(this.loginInfoForm.value.password);
      const promise = new Promise((resolve, reject) => {
        this.loginService.login(this.loginInfo)
          .toPromise()
          .then(
            res => { // Success
              
              this.user = res;
              resolve();
              //console.log(this.user.userName);
              //console.log(this.user.userID) 
            },         
          );
      });
      await promise;
      //console.log(this.user.userName);
      //console.log(this.user.userID);
      if(btoa(this.user.pwd) == btoa("wrong")){
        alert("Wrong password, please try again!");
      }
      else if(btoa(this.user.pwd) ==btoa("noExist"))
      {
        alert('Please register first!');
      }
      else {
        //console.log("tiao");
        //console.log(this.user.balance);
        this.userInfoDetailsService.setUserInfoDetails(this.user);
        this.router.navigate(['/home'])};
    }
  }

  register(){
    this.router.navigate(['/register']);
  }

  crash(){
    window.location.reload();
  }
}
