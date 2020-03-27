import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistComponent } from './regist/regist.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { GameComponent } from './game/game.component';
import { Cart1Component } from './cart1/cart1.component';

@NgModule({
  declarations : [
    AppComponent,
    LoginComponent,
    OrderHistoryComponent,
    ViewDetailsComponent,
    CartComponent,
    HomePageComponent,
    RegistComponent,
    UpdateInfoComponent,
    GameComponent,
    Cart1Component
  ],
  imports :[
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:[AppComponent],
  bootstrap:[AppComponent]
})
export class AppModule { }
