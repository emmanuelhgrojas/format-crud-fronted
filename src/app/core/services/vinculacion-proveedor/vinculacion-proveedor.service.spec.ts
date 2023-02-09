import { TestBed } from '@angular/core/testing';

import { VinculacionProveedorService } from './vinculacion-proveedor.service';

describe('VinculacionProveedorService', () => {
  let service: VinculacionProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinculacionProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
