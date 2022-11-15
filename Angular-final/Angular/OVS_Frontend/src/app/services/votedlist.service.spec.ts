import { TestBed } from '@angular/core/testing';

import { VotedlistService } from './votedlist.service';

describe('VotedlistService', () => {
  let service: VotedlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotedlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
