import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadFormsComponent } from './orc-navbar-pages/download-forms/download-forms.component';
import { HomePageComponent } from './orc-navbar-pages/home-page/home-page.component';
import { InventoryComponent } from './orc-navbar-pages/inventory/inventory.component';
import { ShopComponent } from './orc-navbar-pages/shop/shop.component';
import { StudentsComponent } from './orc-navbar-pages/students/students.component';

const routes: Routes = [
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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
