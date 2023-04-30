import { TestBed } from '@angular/core/testing';

import { SparepartService } from './sparepart.service';

describe('SparepartService', () => {
  let service: SparepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
