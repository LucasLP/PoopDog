import { TestBed } from '@angular/core/testing';

import { PoopDogService } from './poop-dog.service';

describe('PoopDogService', () => {
  let service: PoopDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoopDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
