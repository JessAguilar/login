import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventario2Page } from './inventario2.page';

describe('Inventario2Page', () => {
  let component: Inventario2Page;
  let fixture: ComponentFixture<Inventario2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inventario2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inventario2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
