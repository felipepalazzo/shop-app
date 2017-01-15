import { Injectable } from '@angular/core';

import { Product } from '../../app/models/product.interface';

@Injectable()
export class CartService {
  products: Product[] = [];
  get() {
    return this.products;
  }
  addToCart(product){
    this.products.push(product);
  }
}
