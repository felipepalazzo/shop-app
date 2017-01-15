import { Component } from '@angular/core';

import { User } from '../models/user.interface';

@Component({
  selector: 'user',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user: User = {
    name: 'John Doe',
    email: 'john.doe@email.com',
  }
  onSubmit(form){
    this.user = Object.assign({}, this.user, form.value);
  }
}
