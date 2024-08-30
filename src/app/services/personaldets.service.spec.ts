import { TestBed } from '@angular/core/testing';

import { PersonaldetsService } from './personaldets.service';

describe('PersonaldetsService', () => {
  let service: PersonaldetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaldetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
