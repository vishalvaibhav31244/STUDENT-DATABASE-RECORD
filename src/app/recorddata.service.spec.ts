import { TestBed } from '@angular/core/testing';

import { RecorddataService } from './recorddata.service';

describe('RecorddataService', () => {
  let service: RecorddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecorddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
