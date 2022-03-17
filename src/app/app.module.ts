import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderPageComponent } from './header/header-page/header-page.component';
import { HomePageComponent } from './orc-navbar-pages/home-page/home-page.component';
import { InventoryComponent } from './orc-navbar-pages/inventory/inventory.component';
import { StudentsComponent } from './orc-navbar-pages/students/students.component';
import { ShopComponent } from './orc-navbar-pages/shop/shop.component';
import { DownloadFormsComponent } from './orc-navbar-pages/download-forms/download-forms.component';
import { LoginComponent } from './orc-navbar-pages/login/login.component';
import { ShopProductDetailsComponent } from './orc-navbar-pages/shop/shop-product-details/shop-product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './orc-navbar-pages/shop/cart-page/cart-page.component';
import { NotificationsComponent } from './orc-navbar-pages/notifications/notifications.component';
import { UserComponent } from './orc-navbar-pages/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    HomePageComponent,
    InventoryComponent,
    StudentsComponent,
    ShopComponent,
    DownloadFormsComponent,
    LoginComponent,
    ShopProductDetailsComponent,
    CartPageComponent,
    NotificationsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
