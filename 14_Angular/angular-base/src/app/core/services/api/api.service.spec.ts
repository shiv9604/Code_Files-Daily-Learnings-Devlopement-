import { TestBed } from '@angular/core/testing';

import { SnackbarService } from '../snackbar.service';
import { ApiService } from './api.service';

describe('SnackbarService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
