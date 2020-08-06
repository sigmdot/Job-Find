import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosTrabajosComponent } from './ultimos-trabajos.component';

describe('UltimosTrabajosComponent', () => {
  let component: UltimosTrabajosComponent;
  let fixture: ComponentFixture<UltimosTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
