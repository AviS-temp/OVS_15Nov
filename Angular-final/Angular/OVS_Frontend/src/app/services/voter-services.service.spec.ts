import { TestBed } from '@angular/core/testing';

import { VoterServicesService } from './voter-services.service';

describe('VoterServicesService', () => {
  let service: VoterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
