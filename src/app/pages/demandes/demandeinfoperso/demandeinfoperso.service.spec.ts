import { TestBed } from '@angular/core/testing';

import { DemandeinfopersoService } from './demandeinfoperso.service';

describe('DemandeinfopersoService', () => {
  let service: DemandeinfopersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeinfopersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
