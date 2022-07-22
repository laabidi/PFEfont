import { TestBed } from '@angular/core/testing';

import { DemandeattestationtravailService } from './demandeattestationtravail.service';

describe('DemandeattestationtravailService', () => {
  let service: DemandeattestationtravailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeattestationtravailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
