import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Order } from '../../app/models/order.interface';

const ORDERS_URL: string = './orders.json';

@Injectable()
export class OrderListService {
  constructor(private http: Http){}

  getOrders(): Observable<Order[]> {
    return this.http
      .get(ORDERS_URL)
      .map((response: Response) => response.json().orders);
  }
}
