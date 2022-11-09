import { TestBed } from '@angular/core/testing';

import { ApiCrudFinalService } from './api-crud-final.service';

describe('ApiCrudFinalService', () => {
  let service: ApiCrudFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
