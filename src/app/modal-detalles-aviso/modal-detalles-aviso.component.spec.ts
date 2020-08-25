import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesAvisoComponent } from './modal-detalles-aviso.component';

describe('ModalDetallesAvisoComponent', () => {
  let component: ModalDetallesAvisoComponent;
  let fixture: ComponentFixture<ModalDetallesAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetallesAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallesAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
