import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

import { Product } from '../models/product.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styles: [`
      h2 {
        padding-bottom: 25px;
      }
    `]
})
export class CartComponent implements OnInit {
  products: Product[];
  numOfProducts: number;
  constructor(private cartService: CartService){}
  ngOnInit(){
    this.products = this.cartService.get();
    this.numOfProducts = this.products.length;
  }
  removeFromCart(product: Product) {
    this.products = this.products.filter((p) => p.id !== product.id)
    this.numOfProducts = this.products.length;
  }
}
