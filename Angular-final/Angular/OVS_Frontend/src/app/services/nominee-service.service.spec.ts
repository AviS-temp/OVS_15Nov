import { TestBed } from '@angular/core/testing';

import { NomineeServiceService } from './nominee-service.service';

describe('NomineeServiceService', () => {
  let service: NomineeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomineeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
