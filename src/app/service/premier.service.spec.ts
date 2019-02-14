import { TestBed } from '@angular/core/testing';

import { PremierService } from './premier.service';

describe('PremierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PremierService = TestBed.get(PremierService);
    expect(service).toBeTruthy();
  });
});
