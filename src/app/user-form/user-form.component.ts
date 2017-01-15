import { Component, OnInit } from '@angular/core';
import { UserFormService } from './user-form.service';

import { User } from '../models/user.interface';

@Component({
  selector: 'user',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  user: User;
  isEditing: boolean = false;
  constructor(private userFormService: UserFormService){}
  ngOnInit(){
    this.user = this.userFormService.get()
  }
  toggleEdit(){
    this.isEditing = !this.isEditing
  }
  onSubmit(form){
    this.userFormService.update(form.value)
    this.toggleEdit()
  }
}
