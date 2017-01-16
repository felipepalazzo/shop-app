import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
  let comp:    TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    comp = fixture.componentInstance;
  });

  it('dropdown menu should start closed', () => {
    expect(comp.isDropdownOpen).toBe(false);
  });

  it('dropdown menu should open after click', () => {
    let menuEl = fixture.debugElement.query(By.css('.dropdown'));
    menuEl.triggerEventHandler('click');
    expect(comp.isDropdownOpen).toBe(true);
  });

})
