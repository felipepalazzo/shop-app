import { Component } from '@angular/core';
import { CartService } from './cart.service';

import { Product } from '../models/product.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  products: Product[];
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.products = this.cartService.get();
  }
}
