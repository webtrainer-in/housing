import { TestBed } from '@angular/core/testing';

import { HousingService } from './housing.service';

describe('HousingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousingService = TestBed.get(HousingService);
    expect(service).toBeTruthy();
  });
});
