/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Rr3SearchService } from './rr3-search.service';

describe('Rr3SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Rr3SearchService]
    });
  });

  it('should ...', inject([Rr3SearchService], (service: Rr3SearchService) => {
    expect(service).toBeTruthy();
  }));
});
