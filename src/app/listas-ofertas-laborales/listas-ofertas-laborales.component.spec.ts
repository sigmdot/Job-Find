import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasOfertasLaboralesComponent } from './listas-ofertas-laborales.component';

describe('ListasOfertasLaboralesComponent', () => {
  let component: ListasOfertasLaboralesComponent;
  let fixture: ComponentFixture<ListasOfertasLaboralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasOfertasLaboralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasOfertasLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
