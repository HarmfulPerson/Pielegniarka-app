import { TestBed } from '@angular/core/testing';

import { PracownicyService } from '../pracownicy.service';

describe('PracownicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracownicyService = TestBed.get(PracownicyService);
    expect(service).toBeTruthy();
  });
});
