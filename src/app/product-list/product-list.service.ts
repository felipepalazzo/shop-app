import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../../app/models/product.interface';

const ORDERS_URL: string = './products.json';

@Injectable()
export class ProductListService {
  constructor(private http: Http){}

  getOrders(): Observable<Product[]> {
    return this.http
      .get(ORDERS_URL)
      .map((response: Response) => response.json().products);
  }
}
