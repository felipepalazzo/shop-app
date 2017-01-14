import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OrderListComponent } from './order-list/order-list.component';

// service
import { OrderListService } from './order-list/order-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    OrderListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
