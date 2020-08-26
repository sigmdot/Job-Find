import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosTrabajosSolicitadosComponent } from './ultimos-trabajos-solicitados.component';

describe('UltimosTrabajosSolicitadosComponent', () => {
  let component: UltimosTrabajosSolicitadosComponent;
  let fixture: ComponentFixture<UltimosTrabajosSolicitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosTrabajosSolicitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosTrabajosSolicitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
