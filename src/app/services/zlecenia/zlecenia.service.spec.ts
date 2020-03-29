import { TestBed } from '@angular/core/testing';

import { ZleceniaService } from './zlecenia.service';

describe('ZleceniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZleceniaService = TestBed.get(ZleceniaService);
    expect(service).toBeTruthy();
  });
});
