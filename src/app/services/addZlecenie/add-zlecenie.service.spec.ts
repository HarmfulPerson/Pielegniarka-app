import { TestBed } from '@angular/core/testing';

import { AddZlecenieService } from './add-zlecenie.service';

describe('AddZlecenieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddZlecenieService = TestBed.get(AddZlecenieService);
    expect(service).toBeTruthy();
  });
});
