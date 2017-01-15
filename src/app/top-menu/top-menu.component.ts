import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
  isDropdownOpen: boolean = false;
  toggleDropdown(event){
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
