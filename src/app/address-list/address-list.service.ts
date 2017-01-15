import { Injectable } from '@angular/core';

import { Address } from '../../app/models/address.interface';

@Injectable()
export class AddressListService {
  addressList: Address[] = [
    {
      street: 'Av São José',
      number: 400,
      city: 'São Paulo',
      code: '0000333',
      active: true
    },
    {
      street: 'Rua Austral',
      number: 200,
      city: 'São Paulo',
      code: '0000222',
      active: false
    }
  ]
  get() {
    return this.addressList;
  }
  add(address) {
    this.addressList.push(address)
  }
}
