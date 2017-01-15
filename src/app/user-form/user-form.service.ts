import { Injectable } from '@angular/core';

import { User } from '../../app/models/user.interface';

@Injectable()
export class UserFormService {
  user: User = {
    name: 'John Doe',
    email: 'john.doe@email.com',
  }
  get() {
    return this.user;
  }
  update(data){
    this.user = Object.assign({}, this.user, data);
  }
}
