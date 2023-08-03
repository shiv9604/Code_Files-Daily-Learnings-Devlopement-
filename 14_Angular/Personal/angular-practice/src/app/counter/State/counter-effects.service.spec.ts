import { TestBed } from '@angular/core/testing';

import { CounterEffectsService } from './counter-effects.service';

describe('CounterEffectsService', () => {
  let service: CounterEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
