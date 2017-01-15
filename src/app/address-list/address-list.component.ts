import { Component } from '@angular/core';

import { Address } from '../models/address.interface';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
})
export class AddressListComponent {
  address: Address;
}
