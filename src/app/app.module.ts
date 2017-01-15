import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddressListComponent } from './address-list/address-list.component';

// service
import { OrderListService } from './order-list/order-list.service';
import { UserFormService } from './user-form/user-form.service';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'address', component: AddressListComponent },
  { path: 'user', component: UserFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    OrderListComponent,
    UserFormComponent,
    AddressListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    OrderListService,
    UserFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
