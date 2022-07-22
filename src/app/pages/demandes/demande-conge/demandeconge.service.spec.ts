import { TestBed } from '@angular/core/testing';

import { DemandecongeService } from './demandeconge.service';

describe('DemandecongeService', () => {
  let service: DemandecongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandecongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
