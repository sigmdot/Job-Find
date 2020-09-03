import { TestBed } from '@angular/core/testing';

import { CreacionUsuarioService } from './creacion-usuario.service';

describe('CreacionUsuarioService', () => {
  let service: CreacionUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreacionUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
