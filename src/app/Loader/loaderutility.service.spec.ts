import { TestBed } from '@angular/core/testing';

import { LoaderutilityService } from './loaderutility.service';

describe('LoaderutilityService', () => {
  let service: LoaderutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
