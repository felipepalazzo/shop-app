import { Component, OnInit } from '@angular/core';
import { AddressListService } from './address-list.service'

import { Address } from '../models/address.interface';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
})
export class AddressListComponent implements OnInit {
  addressList: Address[];
  constructor(private addressListService: AddressListService){}
  ngOnInit(){
    this.addressList = this.addressListService.get()
  }
  handleSubmit(address: Address, isValid: boolean){
    if ( isValid ) {
      this.addressListService.add(address)
    }
  }
}
