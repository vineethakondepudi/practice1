import { TestBed } from '@angular/core/testing';

import { Pra1Service } from './pra1.service';

describe('Pra1Service', () => {
  let service: Pra1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pra1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
