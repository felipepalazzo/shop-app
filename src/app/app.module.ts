import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OrderListComponent } from './order-list/order-list.component';

// service
import { OrderListService } from './order-list/order-list.service';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    OrderListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
