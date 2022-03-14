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

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    HomePageComponent,
    InventoryComponent,
    StudentsComponent,
    ShopComponent,
    DownloadFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
