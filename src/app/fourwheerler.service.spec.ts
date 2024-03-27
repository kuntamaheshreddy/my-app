import { TestBed } from '@angular/core/testing';

import { FourwheerlerService } from './fourwheerler.service';

describe('FourwheerlerService', () => {
  let service: FourwheerlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourwheerlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
