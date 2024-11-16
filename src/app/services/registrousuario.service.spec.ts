import { TestBed } from '@angular/core/testing';

import { RegistrousuarioService } from './registrousuario.service';

describe('RegistrousuarioService', () => {
  let service: RegistrousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
