import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { CartService } from '../cart/cart.service';

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
  constructor(
    private productListService: ProductListService,
    private cartService: CartService
  ){}

  ngOnInit(){
    this.productListService
      .getOrders()
      .subscribe((data: Product[]) => this.products = data)
  }
  handleClick(product: Product){
    this.cartService.addToCart(product)
  }
}
