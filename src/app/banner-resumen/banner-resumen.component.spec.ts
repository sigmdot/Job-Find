import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerResumenComponent } from './banner-resumen.component';

describe('BannerResumenComponent', () => {
  let component: BannerResumenComponent;
  let fixture: ComponentFixture<BannerResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
