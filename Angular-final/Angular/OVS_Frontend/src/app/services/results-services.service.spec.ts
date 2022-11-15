import { TestBed } from '@angular/core/testing';

import { ResultsServicesService } from './results-services.service';

describe('ResultsServicesService', () => {
  let service: ResultsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
