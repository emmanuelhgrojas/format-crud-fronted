import { TestBed } from '@angular/core/testing';

import { ConfiguracionFormatoService } from './configuracion-formato.service';

describe('ConfiguracionFormatoService', () => {
  let service: ConfiguracionFormatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionFormatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
