import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

import { Product } from '../models/product.interface';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styles: [`
    .media-object {
      max-width: 159px;
      max-height: 100%;
    }`]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productListService: ProductListService){}

  ngOnInit(){
    this.productListService
      .getOrders()
      .subscribe((data: Product[]) => this.products = data)
  }
}
