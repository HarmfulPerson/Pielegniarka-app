import { TestBed } from '@angular/core/testing';

import { PacjenciService } from './pacjenci.service';

describe('PacjenciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacjenciService = TestBed.get(PacjenciService);
    expect(service).toBeTruthy();
  });
});
