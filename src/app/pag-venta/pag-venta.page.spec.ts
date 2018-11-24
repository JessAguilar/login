import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagVentaPage } from './pag-venta.page';

describe('PagVentaPage', () => {
  let component: PagVentaPage;
  let fixture: ComponentFixture<PagVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
