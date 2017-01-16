import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
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
    }
    .alert {
      opacity: 0;
    }
    `],
  animations: [
    trigger('alertState', [
      state('hidden', style({
        opacity: 0,
      })),
      state('shown',   style({
        opacity: 1,
      })),
      transition('* => *', animate('100ms ease-in'))
    ])
  ]
})
export class ProductListComponent implements OnInit {
  @Input() isAlertVisible: string;
  products: Product[];
  timeoutID: any;
  constructor(
    private productListService: ProductListService,
    private cartService: CartService
  ){}

  ngOnInit(){
    this.isAlertVisible = 'hidden';
    this.productListService
      .getOrders()
      .subscribe((data: Product[]) => this.products = data)
  }
  handleClick(product: Product){
    clearTimeout(this.timeoutID);
    this.cartService.addToCart(product);
    this.isAlertVisible = 'shown';
    this.timeoutID = setTimeout(() => {
      this.isAlertVisible = 'hidden';
    }, 1000);
  }
}
