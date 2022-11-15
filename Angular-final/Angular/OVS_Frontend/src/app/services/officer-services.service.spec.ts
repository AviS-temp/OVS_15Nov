import { TestBed } from '@angular/core/testing';

import { OfficerServicesService } from './officer-services.service';

describe('OfficerServicesService', () => {
  let service: OfficerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
