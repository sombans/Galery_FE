import { TestBed, inject } from '@angular/core/testing';

import { GalerisService } from './galeris.service';

describe('GalerisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalerisService]
    });
  });

  it('should be created', inject([GalerisService], (service: GalerisService) => {
    expect(service).toBeTruthy();
  }));
});
