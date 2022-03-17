import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadFormsComponent } from './orc-navbar-pages/download-forms/download-forms.component';
import { HomePageComponent } from './orc-navbar-pages/home-page/home-page.component';
import { InventoryComponent } from './orc-navbar-pages/inventory/inventory.component';
import { LoginComponent } from './orc-navbar-pages/login/login.component';
import { NotificationsComponent } from './orc-navbar-pages/notifications/notifications.component';
import { CartPageComponent } from './orc-navbar-pages/shop/cart-page/cart-page.component';
import { ShopProductDetailsComponent } from './orc-navbar-pages/shop/shop-product-details/shop-product-details.component';
import { ShopComponent } from './orc-navbar-pages/shop/shop.component';
import { StudentsComponent } from './orc-navbar-pages/students/students.component';
import { UserComponent } from './orc-navbar-pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'download-forms',
    component: DownloadFormsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'product-details',
    component: ShopProductDetailsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
