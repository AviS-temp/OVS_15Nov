import { TestBed } from '@angular/core/testing';

import { SocietyServicesService } from './society-services.service';

describe('SocietyServicesService', () => {
  let service: SocietyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
