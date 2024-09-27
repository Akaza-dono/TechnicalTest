import { TestBed } from '@angular/core/testing';

import { UpdateservicesService } from './updateservices.service';

describe('UpdateservicesService', () => {
  let service: UpdateservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
