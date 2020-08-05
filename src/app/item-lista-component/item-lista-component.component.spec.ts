import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaComponentComponent } from './item-lista-component.component';

describe('ItemListaComponentComponent', () => {
  let component: ItemListaComponentComponent;
  let fixture: ComponentFixture<ItemListaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
