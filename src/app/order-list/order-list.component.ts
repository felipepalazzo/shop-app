import { Component, OnInit } from '@angular/core';
import { OrderListService } from './order-list.service';

import { Order } from '../models/order.interface';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  constructor(private orderListService: OrderListService){}

  ngOnInit(){
    this.orderListService
      .getOrders()
      .subscribe((data: Order[]) => this.orders = data)
  }
}
