import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CartComponent } from './cart/cart.component';

// service
import { ProductListService } from './product-list/product-list.service';
import { UserFormService } from './user-form/user-form.service';
import { AddressListService } from './address-list/address-list.service';
import { CartService } from './cart/cart.service';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'address', component: AddressListComponent },
  { path: 'user', component: UserFormComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ProductListComponent,
    UserFormComponent,
    AddressListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductListService,
    UserFormService,
    AddressListService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
