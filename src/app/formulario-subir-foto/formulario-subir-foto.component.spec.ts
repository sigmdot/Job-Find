import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSubirFotoComponent } from './formulario-subir-foto.component';

describe('FormularioSubirFotoComponent', () => {
  let component: FormularioSubirFotoComponent;
  let fixture: ComponentFixture<FormularioSubirFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSubirFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSubirFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
