import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class TopMenuComponent {
  @ViewChild('dropdown') dropdown: ElementRef;
  constructor(private elementRef: ElementRef) { }
  isDropdownOpen: boolean = false;
  toggleDropdown(event) {
    event && event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onClick(event) {
    if ( !(this.dropdown.nativeElement === event.target) && !this.dropdown.nativeElement.contains(event.target) ) {
      this.isDropdownOpen = false;
    }
  }
}
